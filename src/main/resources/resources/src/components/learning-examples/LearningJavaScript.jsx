const person = {
    name: 'Tshepo',
    address: {
        line1: '123 Bakers Street',
        city: 'London',
        country: 'UK'
    },
    profiles: ['twitter', 'linkedin', 'instagram'],
    printProfile: () => {
        person.profiles.map (
            (profile) => {
                console.log(profile);
            }
        );

        console.log(person.profiles[0]);
    }
}

export default function LearningJavaScript() {
    return (
        <div>
            <div>Learning JavaScript {person.name}</div>
            <div>Address: {person.address.line1}</div>
            <div>City: {person.address.city}</div>
            <div>Country: {person.address.country}</div>
            <div>Profiles: {person.profiles[0]}</div>
            <div>PrintProfile: {person.printProfile()}</div>
        </div>
    );
}