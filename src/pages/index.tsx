import {
	Container,
	Paper,
	List,
	ListItem,
	ListItemText,
	Typography,
	Divider,
	ListItemIcon,
} from "@material-ui/core";
import {
	BooksDocument,
	BooksQuery,
	BooksQueryVariables,
	useBooksQuery,
} from "../generated/graphql";
import { useMemo } from "react";
import { GetServerSideProps } from "next";
import { client } from "../utils/client";
import { Waypoint } from "react-waypoint";
import { MenuBookOutlined } from "@material-ui/icons";

const Home = () => {
	const { data, fetchMore } = useBooksQuery({
		variables: { first: 15 },
	});

	const books = useMemo(() => data?.books.books || [], [data]);

	return (
		<>
			<Typography variant="h1" align="center" color="textPrimary">
				Books List
			</Typography>
			{books.length > 0 && (
				<Container maxWidth="md">
					<Paper>
						<List>
							{books.map((book, idx: number) => {
								return (
									<>
										<ListItem key={idx}>
											<ListItemIcon>
												<MenuBookOutlined />
											</ListItemIcon>
											<ListItemText
												primary={book.title}
												secondary={book.author}
											/>
										</ListItem>
										<Divider />
										{idx === books.length - 1 && (
											<Waypoint
												onEnter={() =>
													fetchMore({
														variables: {
															first: 50,
															cursor:
																data.books.books[data.books.books.length - 1]
																	.id,
														},
														updateQuery: (prev, { fetchMoreResult }) => {
															if (!fetchMoreResult) {
																return prev;
															}
															return {
																books: {
																	__typename: "BooksResponse",
																	books: [
																		...prev.books.books,
																		...fetchMoreResult.books.books,
																	],
																	hasNextPage:
																		fetchMoreResult.books.hasNextPage,
																},
															};
														},
													})
												}
											/>
										)}
									</>
								);
							})}
						</List>
					</Paper>
				</Container>
			)}
		</>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const apolloClient = client;

	const data = await apolloClient.query<BooksQuery, BooksQueryVariables>({
		query: BooksDocument,
		variables: {
			first: 15,
		},
	});

	return {
		props: {
			books: data.data.books,
		},
	};
};
