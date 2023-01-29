import React, {Component} from 'react';
import OpenAiTextCompletion from "../../../components/OpenAITextCompletion";

export default function Index() {

    return (
        <div>
            <OpenAiTextCompletion/>
        </div>
    )
}

export async function getStaticProps({locale}) {
    return {
        props: {
            // You can get the messages from anywhere you like, but the recommended
            // pattern is to put them in JSON files separated by language and read
            // the desired one based on the `locale` received from Next.js.
            // messages: (await import(`../lang/${locale}.json`)).default
        }
    };
}