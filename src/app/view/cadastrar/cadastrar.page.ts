import { Component, OnInit, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import Contato from 'src/app/model/entities/Contato';
import { Sexo } from 'src/app/model/entities/Enum';
import { ServiceFirebaseService } from 'src/app/model/services/service.firebase.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  public nome! :string;
  public telefone! : number;
  public email: string;
  public sexo: Sexo;
  public lista_contatos : Contato[] = [];

  constructor(private alertController: AlertController,
    private router : Router, private firebase: ServiceFirebaseService)  { }

  ngOnInit() {
  }

  cadastrar(){
    if(this.nome && this.telefone){
      let novo : Contato = new Contato(this.nome, this.telefone);
      novo.email = this.email;
      novo.sexo = this.sexo;
      this.firebase.create(novo);
      this.presentAlert("Sucesso", "Contato Salvo!");
      this.router.navigate(["/home"]);
    }else{
     this.presentAlert("Erro", "Campos Obrigatórios!");
    }
  }

  async presentAlert(subHeader : string, message : string) {
    const alert = await this.alertController.create({
      header: 'Agenda de Contatos',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }

}
