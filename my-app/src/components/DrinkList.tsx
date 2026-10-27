
interface DrinkListProps {
    drinks: string[];
}

const DrinkList = ({ drinks }: DrinkListProps) => {
    return (
        <ul>
            {drinks.map((drink, index) => (
                <li key={index}>{drink}</li>
            ))}
        </ul>
    );
};

export default DrinkList;