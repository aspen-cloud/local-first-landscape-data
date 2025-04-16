// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Version: 1,
  Id: 'triplit',
  Name: 'Triplit',
  Description: "The Typescript-first database that handles caching and syncing for your app automatically",
  Website: 'https://triplit.dev',
  Deployment: ['Self-hosted', 'Hosted'],
  License: 'GPL3',
  AppTarget: {
    Platform: {
      data: ['Browser', 'Node']
    },
    LanguageSDK: { data: ['typescript'] },
    FrameworkIntegrations: {
      data: ['React', 'Vue', 'Svelte', 'Angular', 'React Native']
    }
  },
  Networking: {
    Protocol: {
      data: ['WebSockets', 'HTTP']
    },
    Topology: { data: 'Client-Server' },
  },
  ServerSideData: {
    PersistenceMechanism: { data: ['SQLite', 'Cloudflare Durable Object Storage', 'Custom'], comment: 'Adapter for k-v stores.' },
    DataModelParadigm: { data: 'Relational' },
  },
  ClientSideData: {
    QueryAPI: { data: ['Async', 'Signals-based Reactivity'] },
    DataModel: { data: 'Relational' },
    PersistenceMechanism: { data: ['IndexedDB', 'SQLite', 'Custom'], 'comment': 'Adapter for k-v stores.' },
    PersistenceFeatures: { data: 'Indexes' },
    SchemaManagement: {
      data: ['Derived types']
    },
    OfflineReads: {
      data: 'Query Cache',
      comment: 'Subscribed queries have full db support including novel queries'
    },
    OfflineWrites: {
      data: 'Cached offline writes',
    },
    DataSize: {
      data: 'limited by device capabilities'
    },
  },
  SynchronizationStrategy: {
    Authority: {
      data: 'Centralized'
    },
    FullOrPartialReplication: { data: ['Partial Replication'] },
    ConflictHandling: {
      data: 'LWW at the attribute level'
    },
    WhereResolutionOccurs: { data: 'Server' },
    WhatGetsSynced: {
      data: {
        ClientToServer: 'Only changes',
        ServerToClient: 'Only changes',
      },
    },
  },
  AuthIdentity: {
    AuthenticationMethod: {
      data: ['JWT Tokens']
    },
    AuthorizationPermissions: {
      data: 'Custom mapping from token attributes to query filters'
    }
  }
})
