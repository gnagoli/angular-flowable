import { IdmUsersResourceService } from './flowable-client/api/idmUsersResource.service';
import { ProcessDefinitionsResourceService } from './flowable-client/api/processDefinitionsResource.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-flowable';
  constructor(

    // private userService: UserResourceService,
    // private deploymentService: DeploymentService,
    // private formService: FormsService,
    // private tasksService: TasksService,
    // private processDefinitionsService: ProcessDefinitionsService
    private processDefinitionsResourceService: ProcessDefinitionsResourceService,
    private idmUsersResourceService: IdmUsersResourceService

  ) {

  }
  ngOnInit(): void {


    this.idmUsersResourceService.getUsers().subscribe(
      (resp) => {
        console.log(resp);

      },
      (err) => console.error(err)
    );;
    this.processDefinitionsResourceService.getProcessDefinitions()
      .subscribe(
        (resp) => {
          console.log(resp);

        },
        (err) => console.error(err)
      );



    // this.userService.createUser(
    //   {
    //     displayName: '',
    //     email: '',
    //     firstName: '',
    //     lastName: '',
    //     password: '',
    //     id: ''

    //   },
    //   'response'
    // ).subscribe(
    //   (resp: any) => console.log(resp)
    // );

    //     this.deploymentService.listDeployments().subscribe(
    //       resp => console.log(resp)
    //     );


    //     this.processDefinitionsService.listProcessDefinitions({
    //       key: 'traitement-dossier',
    //       latest: true
    //     }, 'body', true).subscribe(
    //       (resp) => {
    //         console.log(resp);


    //         if (resp.data != undefined && resp.data?.length > 0) {
    //           let p = resp.data[0];

    //           if (p.id != null) {
    //             this.processDefinitionsService.getProcessDefinitionStartForm(p.id)
    //             .subscribe(
    //               (resp) => {
    //                 console.log(resp);

    //               },
    //               (err) => console.error(err)
    //             );
    //             this.processDefinitionsService.listProcessDefinitionFormDefinitions(p.id)
    //               .subscribe(
    //                 (resp) => {
    //                   console.log(resp);

    //                 },
    //                 (err) => console.error(err)
    //               );

    // // this.processDefinitionsService.(p.id)
    // //               .subscribe(
    // //                 (resp) => {
    // //                   console.log(resp);

    // //                 },
    // //                 (err) => console.error(err)
    // //               );

    //           }

    //           this.formService.getFormData('51c6a421-220b-11ec-927c-d6f945749f1b').subscribe(
    //             (resp) => {
    //               console.log(resp);

    //             },
    //             (err) => console.error(err)
    //           );
    //         }

    //         this.tasksService.listTasks().subscribe(
    //           (resp) => {
    //             console.log(resp);

    //           },
    //           (err) => console.error(err)
    //         );


    //       },

    //       (err) => console.error(err)
    //     );

    // this.formService.getFormData().subscribe((resp) => console.log(resp));
  }
}
