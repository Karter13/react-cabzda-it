import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType,} from './Reting/Rating';
import {UnControlledRating} from './UnControlledReting/UnControlledRating';
import {Accordion} from './Accordion/Accordion';
import {OnOff} from './OnOff/OnOff';
import {UnControlledOnOff} from './UnControlledOnOff/UnControlledOnOff';
import {UnControlledAccordion} from './UnControlledAccordion/UnControlledAccordion';

function App() {
    console.log('App rendering');

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState(false);
    let [switchOn, setSwitchOn] = useState<boolean>(false);

    return (
        <div className='App'>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <OnOff on={switchOn} activate={setSwitchOn}/>
            {/*<Accordion titleValue={'Users'} collapsed={accordionCollapsed} onChange={() => {*/}
            {/*    setAccordionCollapsed(!accordionCollapsed)*/}
            {/*}}/>*/}

            {/*<UnControlledRating/>*/}
            <UnControlledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <UnControlledAccordion titleValue={'Menu'}/>


            {/*<UnControlledAccordion titleValue={"Users"}/>*/}
            {/* <UnControlledRating/>
            <UnControlledRating/>
            <UnControlledRating/>
            <UnControlledRating/>*/}

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
