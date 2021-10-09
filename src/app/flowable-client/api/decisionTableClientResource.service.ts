/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { JsonNode } from '../model/jsonNode';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class DecisionTableClientResourceService {

    protected basePath = 'https://localhost:8081';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * getDecisionTable
     *
     * @param decisionTableId decisionTableId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDecisionTable(decisionTableId: string, observe?: 'body', reportProgress?: boolean): Observable<JsonNode>;
    public getDecisionTable(decisionTableId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<JsonNode>>;
    public getDecisionTable(decisionTableId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<JsonNode>>;
    public getDecisionTable(decisionTableId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (decisionTableId === null || decisionTableId === undefined) {
            throw new Error('Required parameter decisionTableId was null or undefined when calling getDecisionTable.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<JsonNode>(`${this.basePath}/rest/admin/decision-tables/${encodeURIComponent(String(decisionTableId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getEditorJsonForDecisionTable
     *
     * @param decisionTableId decisionTableId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getEditorJsonForDecisionTable(decisionTableId: string, observe?: 'body', reportProgress?: boolean): Observable<JsonNode>;
    public getEditorJsonForDecisionTable(decisionTableId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<JsonNode>>;
    public getEditorJsonForDecisionTable(decisionTableId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<JsonNode>>;
    public getEditorJsonForDecisionTable(decisionTableId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (decisionTableId === null || decisionTableId === undefined) {
            throw new Error('Required parameter decisionTableId was null or undefined when calling getEditorJsonForDecisionTable.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<JsonNode>(`${this.basePath}/rest/admin/decision-tables/${encodeURIComponent(String(decisionTableId))}/editorJson`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}