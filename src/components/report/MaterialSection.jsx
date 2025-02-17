import Container from "./Container";
import MaterialStats from "./MaterialStats";

const MaterialSection = () => {
    const title = "Material utilizado en el bimestre"

    return (
        <Container title={title}>
            <MaterialStats />
        </Container>
    );
}
 
export default MaterialSection;