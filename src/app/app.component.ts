import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { LoginComponent} from '../pages/login/login.component';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../pages/tabs/tabs.component';
import { TabsEmpresaPage } from '../pages/tabs-empresa/tabs-empresa';
import {AngularFirestore} from 'angularfire2/firestore';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;




  constructor(platform: Platform,
              public afAuth:AngularFireAuth,
              public db:AngularFirestore) {

    platform.ready().then(() => {

      // afAuth.auth.signOut();
        let sub1 = afAuth.authState.subscribe((state) => {
            if(state == null) {
                this.rootPage = LoginComponent;
                // sub1.unsubscribe();
            }
              else {
                // console.log(state.uid);
                let sub = this.db.collection('usuarios').doc<any>(state.uid).valueChanges().subscribe((user) => {
                    // console.log(user);
                    if(user.tipo == 'usuario') {
                      sub.unsubscribe();
                      this.rootPage = TabsPage;
                    }
                    else {
                      sub.unsubscribe();
                      this.rootPage = TabsEmpresaPage;
                    }

                });


              }
        });

    });

  }

}
