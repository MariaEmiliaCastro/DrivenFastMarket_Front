import EmptyPage from "../shared/EmptyPage";
import PageHeader from "../shared/Header";
import PageFooter from "../shared/PageFooter";


export default function RequestPage() {
    return (
        <>
            <PageHeader page="Pedidos" type="title"/>
            <EmptyPage page="request"/>
            <PageFooter pagePlace="Pedidos" />
        </>
    )
}