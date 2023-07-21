import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const useOnClick = () => {
    const navigate = useNavigate();

    const handleClick = useCallback((parametro, info) => {

        if (parametro === "editProfile") {
            Swal.fire({
                text: "¿Deseas adicionar datos del perfil?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'OK',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    console.log(" hizo click en Ok");
                    navigate("/editProfile")
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    console.log("hice click en cancelar ", parametro);
                    navigate("/talents")
                }

            });
        }
        else if(parametro === "portfolio") {
            console.log("hice click en portafolio ", parametro);
            navigate("/portfolio")
        }
        else if(parametro === "curriculum") {
            console.log("hice click en hoja de vida ", parametro);
            navigate("/curriculum")
        }
        else if (parametro === "searchTalent") {
            console.log("hice click en la lupa ", parametro);
            navigate("/search")
        }
       
        else if (parametro === "profile") {
            console.log("hice click en profile ", parametro);
            navigate("/profile")
        }
        else if (parametro === "formRegisTalent") {
            console.log("hice click en formRegisTalent ", parametro);
            navigate("/formRegisTalent")
        }
        else if (parametro === "formStudies") {
            console.log("hice click en profile ", parametro);
            navigate("/editProfile")
        }
        else if (parametro === "cardTalent") {
            console.log("hice click en cardTalent ", parametro);
            navigate("/talentDetails")
        }

        
    }, [navigate]);
    return handleClick;
};

export default useOnClick;