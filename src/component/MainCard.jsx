import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Checkbox } from "../../components/ui/checkbox";
import QuestCard from "./QuestCard";
import { jobs, zodiacQuests } from "./RelicInfo";

function MainCard() {
  const [item, setItem] = useState("");
  let relicSeries = [];
  let relicJob = [];

  if (item === "zodiac") {
    relicSeries = zodiacQuests;
    relicJob = jobs.splice(0, 10);
  }

  return (
    <div className="border p-5 rounded-xl bg-slate-800">
      <div className="flex flex-row justify-evenly">
        <div>
          <h3>Relic Series</h3>
          <select
            name="relic-series"
            defaultValue="default"
            onChange={(e) => {
              setItem(e.target.value);
            }}
          >
            <option value="default" disabled>
              Choose a Relic
            </option>
            <option value="zodiac">Zodiac Weapons</option>
          </select>
        </div>

        <div>
          <h3>Job</h3>
          <select name="job-selection" defaultValue="default">
            <option value="default" disabled>
              Choose a job
            </option>
            {/* {jobs.map((element) => {
              <option value={element.shortHand}>{element.job}</option>;
            })} */}
            <option value="brd">Bard</option>
            <option value="blm">Black Mage</option>
            <option value="drg">Dragoon</option>
            <option value="mnk">Monk</option>
            <option value="nin">Ninja</option>
            <option value="pld">Paladin</option>
            <option value="sch">Scholar</option>
            <option value="smn">Summoner</option>
            <option value="war">Warrior</option>
            <option value="whm">White Mage</option>
          </select>
        </div>
      </div>

      <Accordion type="multiple">
        {relicSeries.map((element, index) => {
          return (
            <AccordionItem value={`item-${index + 1}`}>
              <AccordionTrigger>
                <Checkbox id={`step-${index + 1}`} />
                <label htmlFor={`step-${index + 1}`}>{element.step}</label>
              </AccordionTrigger>
              <AccordionContent>
                <QuestCard
                  title={element.title}
                  location={element.location}
                  required={element.reqItems}
                  quest={element.quest}
                />
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}

export default MainCard;
