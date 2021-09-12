import { AppProps } from "next/dist/shared/lib/router/router";
import { ApolloProvider } from "@apollo/client";
import { client } from "../utils/client";

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
};

export default MyApp;
