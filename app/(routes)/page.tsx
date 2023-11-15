import getBillboard from "@/actions/getBillboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

export default async function Home() {
  const billboard = await getBillboard("2421e379-5dcb-49b9-a1e0-90ade6f28dc8")

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  )
}
