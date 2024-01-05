import { ButtonMain } from "../../styles/button";
import { ContactContext } from "../../providers/ContactContext";
import { Input } from "../Input";

export const EditModal = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { setIsOpenModalCreate, createContact } = useContext(ContactContext);

    return (
        <StyledCreateModal role="dialog">
          <div>
            <header>
              <div>
                <Typography typographystyle="title3">
                  Editar Contato
                </Typography>
                <MdClose
                  size={20}
                  color="#868E96"
                  onClick={() => {
                    setIsOpenModalCreate(false);
                  }}
                />
              </div>
            </header>
            <form onSubmit={handleSubmit(submit)}>
              <Input
                label="Nome"
                id="full_name"
                placeholder="Digite o nome do contato."
                type="text"
                helper={errors.full_name?.message}
                {...register("full_name")}
              />
              <Input
                label="E-mail"
                id="email"
                placeholder="Digite o email do contato."
                type="text"
                helper={errors.email?.message}
                {...register("email")}
              />
              <Input
                label="Telefone"
                id="phone"
                placeholder="Digite o telefone do contato."
                type="text"
                helper={errors.phone_number?.message}
                {...register("phone_number")}
              />
              <ButtonMain type="submit" disabled={isLoading}>
                {isLoading ? "Cadastrando Contato..." : "Cadastrar Contato"}
              </ButtonMain>
            </form>
          </div>
        </StyledCreateModal>
      );
    };
}