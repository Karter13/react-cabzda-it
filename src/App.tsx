import React from 'react';
import './App.css';
import {Accordion} from "./Accordion/Accordion";
import {Rating} from "./Reting/Rating";
import {OnOff} from "./OnOff/OnOff";
import {UnControlledAccordion} from "./UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./UnControlledReting/UnControlledRating";

function App() {
    console.log('App rendering');
    return (
        <div>

            <OnOff/>
            <OnOff/>

            <UnControlledAccordion titleValue={"Menu"}/>
            <UnControlledAccordion titleValue={"Users"}/>

            <UnControlledRating/>
            <UnControlledRating/>
            <UnControlledRating/>
            <UnControlledRating/>
            <UnControlledRating/>

            {/*<PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>*/}
            {/*Article 1
            <Rating value={3}/>*/}
            {/* <Accordion titleValue={"Menu"} collapsed={true} />
            <Accordion titleValue={"Users"} collapsed={false} />*/}
            {/*Article 2*/}

            {/*<Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}

            {/*<OnOff on={false}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
