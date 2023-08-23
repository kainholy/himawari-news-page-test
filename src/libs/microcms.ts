import { MicroCMSQueries, createClient } from "microcms-js-sdk";

const client = createClient({
    serviceDomain: import.meta.env.SERVICE_DOMAIN,
    apiKey: import.meta.env.API_KEY,
});

export const getNews = async (queries: MicroCMSQueries) => {
    return await client.get({ endpoint: "news", queries });
}

export const getNewsDetail = async (newsId: string, queries?: MicroCMSQueries) => {
    return await client.get({ endpoint: "news", contentId: newsId, queries });
}