import { EngagementStage } from "@/components/home/engagement-stage";
import { FieldScenes } from "@/components/home/field-scenes";
import { Opening } from "@/components/home/opening";
import { PracticeScene } from "@/components/home/practice-scene";

export default function Home() {
  return (
    <main>
      <Opening />
      <EngagementStage />
      <PracticeScene />
      <FieldScenes />
    </main>
  );
}
