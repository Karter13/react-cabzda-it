import React, {ChangeEvent, useMemo, useState} from 'react';


export default {
    title: 'SelectExample',
};


type CityType = {
    id: number
    country: string
    city: string
    population: number
}


export const ExampleSelect = () => {
    const [cities, setCities] = useState<Array<CityType>>([
        {id: 1, country: 'Russia', city: 'Moscow', population: 13000000},
        {id: 2, country: 'Belarus', city: 'Minsk', population: 30000000},
        {id: 3, country: 'Ukraine', city: 'Kiev', population: 12000000},
        {id: 4, country: 'Russia', city: 'Leningrad', population: 11000000},
        {id: 5, country: 'Belarus', city: 'Grodno', population: 400000},
        {id: 6, country: 'Ukraine', city: 'Donbas', population: 1500000},
        {id: 7, country: 'Russia', city: 'Vologda', population: 500000},
        {id: 8, country: 'Belarus', city: 'Brest', population: 700000},
        {id: 9, country: 'Ukraine', city: 'Odessa', population: 800000},
    ]);

    const [parentValue, setParentValue] = useState<string | undefined>(undefined);

    const [counter, setCounter] = useState(0);


    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value);
    };


    const citiesByCountries = useMemo(() => {
            const citiesByCountries = cities.filter(c => c.country === 'Belarus');
            return citiesByCountries;
        }, [cities]);



    const citiesPopulation = useMemo(() => {
        const citiesPopulation = cities.filter(c => c.population > 10000000);
        return citiesPopulation;
    }, [cities]);



    const cityWithM = useMemo(() => {
        const cityWithM = cities.filter(c => c.city.toLowerCase().includes('s'));
        return cityWithM;
    }, [cities]);



    return (
        <div>
            <button onClick={() => setCounter(counter + 1)} >+</button>
            {counter}
            <select value={parentValue} onChange={onChange}>

                {
                    citiesByCountries.map(c => <option key={c.id}>{c.city}</option>)
                }

            </select>
            <select value={parentValue} onChange={onChange}>
                {
                    citiesPopulation.map(c => <option key={c.id}>{c.city}</option>)
                }

            </select>
            <select value={parentValue} onChange={onChange}>
                {
                    cityWithM.map(c => <option key={c.id}>{c.city}</option>)
                }

            </select>
        </div>

    )
}
