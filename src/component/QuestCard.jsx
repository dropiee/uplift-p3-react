import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

function QuestCard(props) {
  const quest = props.quest;
  return (
    <Card className="w-450px">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>Location: {props.location}</CardDescription>
      </CardHeader>
      <CardContent className="h-40 overflow-y-auto">
        <span className="font-bold">Required items: {props.required}</span>
        <ol className="list-decimal px-5">
          {quest.map((element, index) => (
            <li className="text-left" key={index + 1}>
              {element}
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}

export default QuestCard;
