import { faker } from "@faker-js/faker";
import { useCallback } from "react";
import { Breadcrumb, Section } from "../components";
import PostCard from '../components/post.card.component';

export default function Blog(){
    const generatePosts = useCallback( (length : number) => {
        const posts = []
        for (let i = 1; i < length; i++) {
            posts.push( {
                title : faker.commerce.productName() ,
                excerpt : faker.lorem.sentences(10),
                image : faker.image.url(),
                slug : faker.internet.domainWord()
            } );
            
        }

        return posts
    }, [])
    return (
        <>
            <Breadcrumb title="Latest news from us" />
            <Section className="" containerClassName="grid gap-y-10">
                { generatePosts(16).map( PostCard) }
            </Section>
        </>
    )
}