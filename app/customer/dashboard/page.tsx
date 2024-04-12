import { Button } from "@/components/ui/button";
import Link from "next/link";

const DashboardPage = () => {
  return (
    <div>
      DashboardPage
      <Link href="/">
        <Button>Back</Button>
      </Link>
    </div>
  );
};

export default DashboardPage;
