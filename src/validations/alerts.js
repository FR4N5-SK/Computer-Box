import Swal from 'sweetalert2'

export function alertSuccess(text) {
    Swal.fire({
        position: "center",
        icon: "success",
        title: text,
        showConfirmButton: false,
        timer: 2500
    });
}

export function alertError(text) {
    Swal.fire({
        position: "center",
        icon: "error",
        title: text,
        showConfirmButton: true,
    });
}