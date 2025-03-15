import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';


interface Proyecto {
    titulo: string;
    descripcion: string;
    tecnologias: string;
    imagenes: string[]; // Array de imágenes
  }

@Component({
    selector: 'app-home',
    imports: [MatDialogModule,CommonModule,  ],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true,
})
export class HomeComponent {


    isModalVisible:boolean = false;
    public selectevent: Proyecto | null = null;
    public isOpen = false;
    public images: string[] = [];
    public currentImageIndex = 0;



    @HostListener('window:hashchange', ['$event'])
    onHashChange() {
      const id = window.location.hash.substring(1); // Obtiene el ID sin "#"
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' }); // Hace scroll suave
        }
      }
    }





   public proyectos = [
        {
          titulo: 'Café Blog',
          descripcion: 'Proyecto desarrollado exclusivamente con HTML y CSS, enfocado en la creación de una página web estática con un diseño limpio y responsivo. Se implementaron diferentes propiedades de display y Flexbox para estructurar el contenido de manera eficiente. Además, se estableció una navegación fluida mediante rutas internas, permitiendo el acceso a distintas secciones del sitio sin el uso de JavaScript. Ideal para demostrar la aplicación de estilos modernos y buenas prácticas en desarrollo web.',
         Tecnologias:'HTML y CSS.' ,
          imagenes: [
            'assets/bog_cafe/blogcafe-1.png',
            'assets/bog_cafe/blogcafe-2.png',
            'assets/bog_cafe/blogcafe-3.png',
           
           
           
          ],
        },
        {
          titulo: 'Freelancer ',
          descripcion: 'Página estática e informativa desarrollada en html y css donde se muestra contenido sin funcionalidades dinámicas. ',
         Tecnologias: 'HTML y CSS.',
          imagenes: [
          'assets/freelancer/Screenshot 2025-03-08 at 16-05-25 Diseñador Freelancer.png',
           
          ],
        },
        {
          titulo: 'Festival de musica',
          descripcion: 'Página web estática e informativa para un festival de música, desarrollada con HTML y CSS. Se implementó un diseño atractivo con un sistema de boletos estilizados en CSS, una galería de fotos en grid y una sección de videos integrados para mejorar la experiencia visual del usuario.',
         Tecnologias: 'HTML, CSS (Flexbox y Grid).',
          imagenes: [
            'assets/festivalmusica-FIN/music-2.png',
            'assets/festivalmusica-FIN/musica-1.png',
            'assets/festivalmusica-FIN/musica-3.png',
            'assets/festivalmusica-FIN/musica_1.png'
           
          ],
        },
        {
            titulo: 'gym',
            descripcion: 'Gym Management System es una aplicación web desarrollada para gestionar tanto la parte administrativa como la experiencia del usuario en un gimnasio. Este sistema cuenta con dos vistas principales: una para los administradores y otra para los usuarios. La vista de usuario permite gestionar la cuenta personal, ver entrenamientos disponibles, programar sesiones y consultar el historial de actividades realizadas. Por otro lado, la vista de administrador ofrece herramientas para gestionar usuarios, actualizar los datos del gimnasio y monitorizar las actividades de los miembros. El sistema incluye un CRUD completo (Crear, Leer, Actualizar, Eliminar) para usuarios y entrenamientos, lo que facilita la administración de todos los datos. No se ha utilizado ningún framework de diseño como Bootstrap; todo el diseño fue creado utilizando CSS para ofrecer una interfaz completamente personalizada. Además, el sistema está respaldado por una base de datos MongoDB, que garantiza la escalabilidad y el almacenamiento eficiente de los datos..',
         Tecnologias: 'angular, mongoDB, css, html, node.js .',
            imagenes: [
             'assets/gym/Screenshot 2025-03-08 at 16-51-48 LoginPwass.png',
             'assets/gym/Screenshot 2025-03-08 at 16-52-08 LoginPwass.png',
             'assets/gym/Screenshot 2025-03-08 at 16-53-48 LoginPwass.png',
             'assets/gym/Screenshot 2025-03-08 at 16-54-10 LoginPwass.png',
             'assets/gym/Screenshot 2025-03-08 at 16-54-40 LoginPwass.png'
            ],
          },
          {
            titulo: 'Inmobiliaria',
            descripcion: 'Proyecto desarrollado con Angular, MySQL, HTML, Tailwind y Bootstrap, enfocado en la creación de una plataforma inmobiliaria dinámica y responsiva. Se implementó un diseño moderno y adaptable utilizando Tailwind y Bootstrap para garantizar una experiencia de usuario fluida en distintos dispositivos. Angular permitió una gestión eficiente de los componentes y la interacción con el usuario, mientras que MySQL se utilizó para la gestión y almacenamiento de datos de propiedades. La plataforma facilita la búsqueda, filtrado y visualización de inmuebles de manera intuitiva, demostrando la aplicación de tecnologías avanzadas y buenas prácticas en desarrollo web.',
         Tecnologias :'angular, mysql, html, tailwind, bootstrap.',
            imagenes: [
             'assets/inmobiliaria/Screenshot 2025-03-08 at 17-14-50 BienesRaices.png',
             'assets/inmobiliaria/Screenshot 2025-03-08 at 17-15-08 BienesRaices.png',
             'assets/inmobiliaria/Screenshot 2025-03-08 at 17-15-21 BienesRaices.png',
             'assets/inmobiliaria/Screenshot 2025-03-08 at 17-15-49 BienesRaices.png',
             'assets/inmobiliaria/Screenshot 2025-03-08 at 17-18-15 BienesRaices.png',
             'assets/inmobiliaria/Screenshot 2025-03-08 at 17-18-38 BienesRaices.png',
             
            ],
          },
          
      ];

    

      evento(event: any) {
        this.selectevent = event;
        this.isOpen = true;
        this.currentImageIndex = 0; // Reiniciar el índice de la imagen al seleccionar un nuevo proyecto
    }

closeModal() {
  this.isOpen = false;
}

nextImage() {
  if (this.selectevent?.imagenes && this.selectevent.imagenes.length > 0) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.selectevent.imagenes.length;
  }
}

prevImage() {
  if (this.selectevent?.imagenes && this.selectevent.imagenes.length > 0) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.selectevent.imagenes.length) % this.selectevent.imagenes.length;
  }
}

menuOpen = false;

toggleMenu() {
  this.menuOpen = !this.menuOpen;
}

closeMenu() {
  this.menuOpen = false;
}


}




      
