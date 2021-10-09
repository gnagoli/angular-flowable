import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AccountResourceService } from './api/accountResource.service';
import { ApiGroupsResourceService } from './api/apiGroupsResource.service';
import { ApiTokensResourceService } from './api/apiTokensResource.service';
import { ApiUsersResourceService } from './api/apiUsersResource.service';
import { AppDefinitionClientResourceService } from './api/appDefinitionClientResource.service';
import { AppDefinitionsClientResourceService } from './api/appDefinitionsClientResource.service';
import { AppDefinitionsResourceService } from './api/appDefinitionsResource.service';
import { AppDeploymentClientResourceService } from './api/appDeploymentClientResource.service';
import { AppDeploymentsClientResourceService } from './api/appDeploymentsClientResource.service';
import { BatchClientResourceService } from './api/batchClientResource.service';
import { BatchPartClientResourceService } from './api/batchPartClientResource.service';
import { BatchesClientResourceService } from './api/batchesClientResource.service';
import { CaseDefinitionClientResourceService } from './api/caseDefinitionClientResource.service';
import { CaseDefinitionResourceService } from './api/caseDefinitionResource.service';
import { CaseDefinitionsClientResourceService } from './api/caseDefinitionsClientResource.service';
import { CaseDefinitionsResourceService } from './api/caseDefinitionsResource.service';
import { CaseInstanceClientResourceService } from './api/caseInstanceClientResource.service';
import { CaseInstanceDisplayJsonClientResourceService } from './api/caseInstanceDisplayJsonClientResource.service';
import { CaseInstanceQueryResourceService } from './api/caseInstanceQueryResource.service';
import { CaseInstanceResourceService } from './api/caseInstanceResource.service';
import { CaseInstancesClientResourceService } from './api/caseInstancesClientResource.service';
import { CaseInstancesResourceService } from './api/caseInstancesResource.service';
import { CmmnDeploymentClientResourceService } from './api/cmmnDeploymentClientResource.service';
import { CmmnDeploymentsClientResourceService } from './api/cmmnDeploymentsClientResource.service';
import { CmmnDisplayJsonClientResourceService } from './api/cmmnDisplayJsonClientResource.service';
import { CmmnJobClientResourceService } from './api/cmmnJobClientResource.service';
import { CmmnJobsClientResourceService } from './api/cmmnJobsClientResource.service';
import { CmmnTaskClientResourceService } from './api/cmmnTaskClientResource.service';
import { CmmnTasksClientResourceService } from './api/cmmnTasksClientResource.service';
import { CommentsResourceService } from './api/commentsResource.service';
import { ContentItemClientResourceService } from './api/contentItemClientResource.service';
import { ContentItemsClientResourceService } from './api/contentItemsClientResource.service';
import { DebuggerResourceService } from './api/debuggerResource.service';
import { DecisionTableClientResourceService } from './api/decisionTableClientResource.service';
import { DecisionTableDeploymentClientResourceService } from './api/decisionTableDeploymentClientResource.service';
import { DecisionTableDeploymentsClientResourceService } from './api/decisionTableDeploymentsClientResource.service';
import { DecisionTableHistoricExecutionClientResourceService } from './api/decisionTableHistoricExecutionClientResource.service';
import { DecisionTableHistoricExecutionsClientResourceService } from './api/decisionTableHistoricExecutionsClientResource.service';
import { DecisionTablesClientResourceService } from './api/decisionTablesClientResource.service';
import { DeploymentClientResourceService } from './api/deploymentClientResource.service';
import { DeploymentsClientResourceService } from './api/deploymentsClientResource.service';
import { DisplayJsonClientResourceService } from './api/displayJsonClientResource.service';
import { EventSubscriptionClientResourceService } from './api/eventSubscriptionClientResource.service';
import { EventSubscriptionsClientResourceService } from './api/eventSubscriptionsClientResource.service';
import { FormDefinitionClientResourceService } from './api/formDefinitionClientResource.service';
import { FormDefinitionsClientResourceService } from './api/formDefinitionsClientResource.service';
import { FormDeploymentClientResourceService } from './api/formDeploymentClientResource.service';
import { FormDeploymentsClientResourceService } from './api/formDeploymentsClientResource.service';
import { FormInstanceClientResourceService } from './api/formInstanceClientResource.service';
import { FormInstancesClientResourceService } from './api/formInstancesClientResource.service';
import { HistoricTaskQueryResourceService } from './api/historicTaskQueryResource.service';
import { IdmGroupsResourceService } from './api/idmGroupsResource.service';
import { IdmPrivilegesResourceService } from './api/idmPrivilegesResource.service';
import { IdmProfileResourceService } from './api/idmProfileResource.service';
import { IdmUsersResourceService } from './api/idmUsersResource.service';
import { JobClientResourceService } from './api/jobClientResource.service';
import { JobsClientResourceService } from './api/jobsClientResource.service';
import { MigrateAppDefinitionsResourceService } from './api/migrateAppDefinitionsResource.service';
import { ModelsClientResourceService } from './api/modelsClientResource.service';
import { ProcessDefinitionClientResourceService } from './api/processDefinitionClientResource.service';
import { ProcessDefinitionResourceService } from './api/processDefinitionResource.service';
import { ProcessDefinitionsClientResourceService } from './api/processDefinitionsClientResource.service';
import { ProcessDefinitionsResourceService } from './api/processDefinitionsResource.service';
import { ProcessEngineInfoClientResourceService } from './api/processEngineInfoClientResource.service';
import { ProcessInstanceClientResourceService } from './api/processInstanceClientResource.service';
import { ProcessInstanceQueryResourceService } from './api/processInstanceQueryResource.service';
import { ProcessInstanceResourceService } from './api/processInstanceResource.service';
import { ProcessInstancesClientResourceService } from './api/processInstancesClientResource.service';
import { ProcessInstancesResourceService } from './api/processInstancesResource.service';
import { RelatedContentResourceService } from './api/relatedContentResource.service';
import { RemoteAccountResourceService } from './api/remoteAccountResource.service';
import { RuntimeDisplayJsonClientResourceService } from './api/runtimeDisplayJsonClientResource.service';
import { ServerConfigsResourceService } from './api/serverConfigsResource.service';
import { TaskActionResourceService } from './api/taskActionResource.service';
import { TaskClientResourceService } from './api/taskClientResource.service';
import { TaskFormResourceService } from './api/taskFormResource.service';
import { TaskQueryResourceService } from './api/taskQueryResource.service';
import { TaskResourceService } from './api/taskResource.service';
import { TasksClientResourceService } from './api/tasksClientResource.service';
import { TasksResourceService } from './api/tasksResource.service';
import { UserResourceService } from './api/userResource.service';
import { WorkflowGroupResourceService } from './api/workflowGroupResource.service';
import { WorkflowGroupsResourceService } from './api/workflowGroupsResource.service';
import { WorkflowUsersResourceService } from './api/workflowUsersResource.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AccountResourceService,
    ApiGroupsResourceService,
    ApiTokensResourceService,
    ApiUsersResourceService,
    AppDefinitionClientResourceService,
    AppDefinitionsClientResourceService,
    AppDefinitionsResourceService,
    AppDeploymentClientResourceService,
    AppDeploymentsClientResourceService,
    BatchClientResourceService,
    BatchPartClientResourceService,
    BatchesClientResourceService,
    CaseDefinitionClientResourceService,
    CaseDefinitionResourceService,
    CaseDefinitionsClientResourceService,
    CaseDefinitionsResourceService,
    CaseInstanceClientResourceService,
    CaseInstanceDisplayJsonClientResourceService,
    CaseInstanceQueryResourceService,
    CaseInstanceResourceService,
    CaseInstancesClientResourceService,
    CaseInstancesResourceService,
    CmmnDeploymentClientResourceService,
    CmmnDeploymentsClientResourceService,
    CmmnDisplayJsonClientResourceService,
    CmmnJobClientResourceService,
    CmmnJobsClientResourceService,
    CmmnTaskClientResourceService,
    CmmnTasksClientResourceService,
    CommentsResourceService,
    ContentItemClientResourceService,
    ContentItemsClientResourceService,
    DebuggerResourceService,
    DecisionTableClientResourceService,
    DecisionTableDeploymentClientResourceService,
    DecisionTableDeploymentsClientResourceService,
    DecisionTableHistoricExecutionClientResourceService,
    DecisionTableHistoricExecutionsClientResourceService,
    DecisionTablesClientResourceService,
    DeploymentClientResourceService,
    DeploymentsClientResourceService,
    DisplayJsonClientResourceService,
    EventSubscriptionClientResourceService,
    EventSubscriptionsClientResourceService,
    FormDefinitionClientResourceService,
    FormDefinitionsClientResourceService,
    FormDeploymentClientResourceService,
    FormDeploymentsClientResourceService,
    FormInstanceClientResourceService,
    FormInstancesClientResourceService,
    HistoricTaskQueryResourceService,
    IdmGroupsResourceService,
    IdmPrivilegesResourceService,
    IdmProfileResourceService,
    IdmUsersResourceService,
    JobClientResourceService,
    JobsClientResourceService,
    MigrateAppDefinitionsResourceService,
    ModelsClientResourceService,
    ProcessDefinitionClientResourceService,
    ProcessDefinitionResourceService,
    ProcessDefinitionsClientResourceService,
    ProcessDefinitionsResourceService,
    ProcessEngineInfoClientResourceService,
    ProcessInstanceClientResourceService,
    ProcessInstanceQueryResourceService,
    ProcessInstanceResourceService,
    ProcessInstancesClientResourceService,
    ProcessInstancesResourceService,
    RelatedContentResourceService,
    RemoteAccountResourceService,
    RuntimeDisplayJsonClientResourceService,
    ServerConfigsResourceService,
    TaskActionResourceService,
    TaskClientResourceService,
    TaskFormResourceService,
    TaskQueryResourceService,
    TaskResourceService,
    TasksClientResourceService,
    TasksResourceService,
    UserResourceService,
    WorkflowGroupResourceService,
    WorkflowGroupsResourceService,
    WorkflowUsersResourceService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
