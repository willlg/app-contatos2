import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import Contato from 'src/app/model/entities/Contato';
import { ServiceFirebaseService } from 'src/app/model/services/service.firebase.service';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.page.html',
  styleUrls: ['./detalhar.page.scss'],
})
export class DetalharPage implements OnInit {
  nome: string;
  telefone: number;
  email: string;
  sexo: string;
  contato: Contato;
  indice: number;
  edicao: boolean = true;
  constructor(private router : Router,
    private alertController : AlertController,
    private firebase : ServiceFirebaseService) { }

    ngOnInit() {
      this.contato = history.state.contato;
      this.nome = this.contato.nome;
      this.telefone = this.contato.telefone;
      this.email = this.contato.email;
      this.sexo = this.contato.sexo;
  }

  habilitar(){
    if(this.edicao){
      this.edicao = false;
    }
    else{
      this.edicao = true;
    }
  }

  editar(){
    let novo: Contato = new Contato(this.nome, this.telefone);
    if(this.nome && this.telefone){
      this.firebase.update(novo, this.contato.id);
    }else{
      this.presentAlert("Erro", "Não é possivel deixar nome e/ou telefone em branco!");
    }
    this.router.navigate(["/home"]);
  }

  excluir(){
    this.firebase.delete(this.contato);
    this.router.navigate(["/home"]);
  }

  async presentAlert(subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: 'ALERTA',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }

}
