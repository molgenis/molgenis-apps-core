export default {
  'href': '/api/v2/sys_md_EntityType',
  'meta': {
    'href': '/api/v2/sys_md_EntityType',
    'hrefCollection': '/api/v2/sys_md_EntityType',
    'name': 'sys_md_EntityType',
    'label': 'Entity type',
    'description': 'Meta data for entity classes',
    'attributes': [
      {
        'href': '/api/v2/sys_md_EntityType/meta/id',
        'fieldType': 'STRING',
        'name': 'id',
        'label': 'Identifier',
        'attributes': [],
        'maxLength': 255,
        'auto': true,
        'nillable': false,
        'readOnly': true,
        'labelAttribute': false,
        'unique': true,
        'visible': true,
        'lookupAttribute': false,
        'isAggregatable': false
      },
      {
        'href': '/api/v2/sys_md_EntityType/meta/label',
        'fieldType': 'STRING',
        'name': 'label',
        'label': 'Label',
        'attributes': [],
        'maxLength': 255,
        'auto': false,
        'nillable': false,
        'readOnly': false,
        'labelAttribute': true,
        'unique': false,
        'visible': true,
        'lookupAttribute': true,
        'isAggregatable': false
      },
      {
        'href': '/api/v2/sys_md_EntityType/meta/description',
        'fieldType': 'TEXT',
        'name': 'description',
        'label': 'Description',
        'attributes': [],
        'maxLength': 65535,
        'auto': false,
        'nillable': true,
        'readOnly': false,
        'labelAttribute': false,
        'unique': false,
        'visible': true,
        'lookupAttribute': false,
        'isAggregatable': false
      },
      {
        'href': '/api/v2/sys_md_EntityType/meta/package',
        'fieldType': 'XREF',
        'name': 'package',
        'label': 'Package',
        'attributes': [],
        'refEntity': {
          'href': '/api/v2/sys_md_Package',
          'hrefCollection': '/api/v2/sys_md_Package',
          'name': 'sys_md_Package',
          'label': 'Package',
          'description': 'Grouping of related entities',
          'attributes': [
            {
              'href': '/api/v2/sys_md_Package/meta/id',
              'fieldType': 'STRING',
              'name': 'id',
              'label': 'Identifier',
              'attributes': [],
              'maxLength': 255,
              'auto': true,
              'nillable': false,
              'readOnly': true,
              'labelAttribute': false,
              'unique': true,
              'visible': true,
              'lookupAttribute': false,
              'isAggregatable': false
            },
            {
              'href': '/api/v2/sys_md_Package/meta/label',
              'fieldType': 'STRING',
              'name': 'label',
              'label': 'Label',
              'attributes': [],
              'maxLength': 255,
              'auto': false,
              'nillable': false,
              'readOnly': false,
              'labelAttribute': true,
              'unique': false,
              'visible': true,
              'lookupAttribute': true,
              'isAggregatable': false
            }
          ],
          'labelAttribute': 'label',
          'idAttribute': 'id',
          'lookupAttributes': [
            'label'
          ],
          'isAbstract': false,
          'writable': true,
          'languageCode': 'en'
        },
        'auto': false,
        'nillable': true,
        'readOnly': false,
        'labelAttribute': false,
        'unique': false,
        'visible': true,
        'lookupAttribute': false,
        'isAggregatable': false
      },
      {
        'href': '/api/v2/sys_md_EntityType/meta/attributes',
        'fieldType': 'ONE_TO_MANY',
        'name': 'attributes',
        'label': 'Attributes',
        'attributes': [],
        'refEntity': {
          'href': '/api/v2/sys_md_Attribute',
          'hrefCollection': '/api/v2/sys_md_Attribute',
          'name': 'sys_md_Attribute',
          'label': 'Attribute',
          'description': 'Meta data for attributes',
          'attributes': [
            {
              'href': '/api/v2/sys_md_Attribute/meta/id',
              'fieldType': 'STRING',
              'name': 'id',
              'label': 'Identifier',
              'attributes': [],
              'maxLength': 255,
              'auto': true,
              'nillable': false,
              'readOnly': true,
              'labelAttribute': false,
              'unique': true,
              'visible': false,
              'lookupAttribute': false,
              'isAggregatable': false
            },
            {
              'href': '/api/v2/sys_md_Attribute/meta/name',
              'fieldType': 'STRING',
              'name': 'name',
              'label': 'Name',
              'attributes': [],
              'maxLength': 255,
              'auto': false,
              'nillable': false,
              'readOnly': true,
              'labelAttribute': true,
              'unique': false,
              'visible': true,
              'lookupAttribute': true,
              'isAggregatable': false
            }
          ],
          'labelAttribute': 'name',
          'idAttribute': 'id',
          'lookupAttributes': [
            'name',
            'label'
          ],
          'isAbstract': false,
          'writable': true,
          'languageCode': 'en'
        },
        'mappedBy': 'entity',
        'auto': false,
        'nillable': true,
        'readOnly': false,
        'labelAttribute': false,
        'unique': false,
        'visible': true,
        'lookupAttribute': false,
        'isAggregatable': false
      },
      {
        'href': '/api/v2/sys_md_EntityType/meta/isAbstract',
        'fieldType': 'BOOL',
        'name': 'isAbstract',
        'label': 'Abstract',
        'attributes': [],
        'auto': false,
        'nillable': false,
        'readOnly': true,
        'defaultValue': 'false',
        'labelAttribute': false,
        'unique': false,
        'visible': true,
        'lookupAttribute': false,
        'isAggregatable': false
      },
      {
        'href': '/api/v2/sys_md_EntityType/meta/extends',
        'fieldType': 'XREF',
        'name': 'extends',
        'label': 'Extends',
        'attributes': [],
        'refEntity': {
          'href': '/api/v2/sys_md_EntityType',
          'hrefCollection': '/api/v2/sys_md_EntityType',
          'name': 'sys_md_EntityType',
          'label': 'Entity type',
          'description': 'Meta data for entity classes',
          'attributes': [
            {
              'href': '/api/v2/sys_md_EntityType/meta/id',
              'fieldType': 'STRING',
              'name': 'id',
              'label': 'Identifier',
              'attributes': [],
              'maxLength': 255,
              'auto': true,
              'nillable': false,
              'readOnly': true,
              'labelAttribute': false,
              'unique': true,
              'visible': true,
              'lookupAttribute': false,
              'isAggregatable': false
            },
            {
              'href': '/api/v2/sys_md_EntityType/meta/label',
              'fieldType': 'STRING',
              'name': 'label',
              'label': 'Label',
              'attributes': [],
              'maxLength': 255,
              'auto': false,
              'nillable': false,
              'readOnly': false,
              'labelAttribute': true,
              'unique': false,
              'visible': true,
              'lookupAttribute': true,
              'isAggregatable': false
            }
          ],
          'labelAttribute': 'label',
          'idAttribute': 'id',
          'lookupAttributes': [
            'label'
          ],
          'isAbstract': false,
          'writable': true,
          'languageCode': 'en'
        },
        'auto': false,
        'nillable': true,
        'readOnly': true,
        'labelAttribute': false,
        'unique': false,
        'visible': true,
        'lookupAttribute': false,
        'isAggregatable': false
      },
      {
        'href': '/api/v2/sys_md_EntityType/meta/tags',
        'fieldType': 'MREF',
        'name': 'tags',
        'label': 'Tags',
        'attributes': [],
        'refEntity': {
          'href': '/api/v2/sys_md_Tag',
          'hrefCollection': '/api/v2/sys_md_Tag',
          'name': 'sys_md_Tag',
          'label': 'Tag',
          'description': 'Semantic tags that can be applied to entities, attributes and other data',
          'attributes': [
            {
              'href': '/api/v2/sys_md_Tag/meta/id',
              'fieldType': 'STRING',
              'name': 'id',
              'label': 'Identifier',
              'attributes': [],
              'maxLength': 255,
              'auto': false,
              'nillable': false,
              'readOnly': true,
              'labelAttribute': false,
              'unique': true,
              'visible': true,
              'lookupAttribute': false,
              'isAggregatable': false
            },
            {
              'href': '/api/v2/sys_md_Tag/meta/label',
              'fieldType': 'STRING',
              'name': 'label',
              'label': 'Label',
              'attributes': [],
              'maxLength': 255,
              'auto': false,
              'nillable': false,
              'readOnly': false,
              'labelAttribute': true,
              'unique': false,
              'visible': true,
              'lookupAttribute': true,
              'isAggregatable': false
            }
          ],
          'labelAttribute': 'label',
          'idAttribute': 'id',
          'lookupAttributes': [
            'objectIRI',
            'label'
          ],
          'isAbstract': false,
          'writable': true,
          'languageCode': 'en'
        },
        'auto': false,
        'nillable': true,
        'readOnly': false,
        'labelAttribute': false,
        'unique': false,
        'visible': true,
        'lookupAttribute': false,
        'isAggregatable': false
      },
      {
        'href': '/api/v2/sys_md_EntityType/meta/backend',
        'fieldType': 'ENUM',
        'name': 'backend',
        'label': 'Backend',
        'description': 'Backend data store',
        'attributes': [],
        'enumOptions': [
          'PostgreSQL'
        ],
        'maxLength': 255,
        'auto': false,
        'nillable': false,
        'readOnly': true,
        'defaultValue': 'PostgreSQL',
        'labelAttribute': false,
        'unique': false,
        'visible': true,
        'lookupAttribute': false,
        'isAggregatable': false
      },
      {
        'href': '/api/v2/sys_md_EntityType/meta/labelEn',
        'fieldType': 'STRING',
        'name': 'labelEn',
        'label': 'Label (en)',
        'attributes': [],
        'maxLength': 255,
        'auto': false,
        'nillable': true,
        'readOnly': false,
        'labelAttribute': false,
        'unique': false,
        'visible': true,
        'lookupAttribute': false,
        'isAggregatable': false
      },
      {
        'href': '/api/v2/sys_md_EntityType/meta/descriptionEn',
        'fieldType': 'TEXT',
        'name': 'descriptionEn',
        'label': 'Description (en)',
        'attributes': [],
        'maxLength': 65535,
        'auto': false,
        'nillable': true,
        'readOnly': false,
        'labelAttribute': false,
        'unique': false,
        'visible': true,
        'lookupAttribute': false,
        'isAggregatable': false
      },
      {
        'href': '/api/v2/sys_md_EntityType/meta/labelNl',
        'fieldType': 'STRING',
        'name': 'labelNl',
        'label': 'Label (nl)',
        'attributes': [],
        'maxLength': 255,
        'auto': false,
        'nillable': true,
        'readOnly': false,
        'labelAttribute': false,
        'unique': false,
        'visible': true,
        'lookupAttribute': false,
        'isAggregatable': false
      },
      {
        'href': '/api/v2/sys_md_EntityType/meta/descriptionNl',
        'fieldType': 'TEXT',
        'name': 'descriptionNl',
        'label': 'Description (nl)',
        'attributes': [],
        'maxLength': 65535,
        'auto': false,
        'nillable': true,
        'readOnly': false,
        'labelAttribute': false,
        'unique': false,
        'visible': true,
        'lookupAttribute': false,
        'isAggregatable': false
      },
      {
        'href': '/api/v2/sys_md_EntityType/meta/labelDe',
        'fieldType': 'STRING',
        'name': 'labelDe',
        'label': 'Label (de)',
        'attributes': [],
        'maxLength': 255,
        'auto': false,
        'nillable': true,
        'readOnly': false,
        'labelAttribute': false,
        'unique': false,
        'visible': true,
        'lookupAttribute': false,
        'isAggregatable': false
      },
      {
        'href': '/api/v2/sys_md_EntityType/meta/descriptionDe',
        'fieldType': 'TEXT',
        'name': 'descriptionDe',
        'label': 'Description (de)',
        'attributes': [],
        'maxLength': 65535,
        'auto': false,
        'nillable': true,
        'readOnly': false,
        'labelAttribute': false,
        'unique': false,
        'visible': true,
        'lookupAttribute': false,
        'isAggregatable': false
      },
      {
        'href': '/api/v2/sys_md_EntityType/meta/labelEs',
        'fieldType': 'STRING',
        'name': 'labelEs',
        'label': 'Label (es)',
        'attributes': [],
        'maxLength': 255,
        'auto': false,
        'nillable': true,
        'readOnly': false,
        'labelAttribute': false,
        'unique': false,
        'visible': true,
        'lookupAttribute': false,
        'isAggregatable': false
      },
      {
        'href': '/api/v2/sys_md_EntityType/meta/descriptionEs',
        'fieldType': 'TEXT',
        'name': 'descriptionEs',
        'label': 'Description (es)',
        'attributes': [],
        'maxLength': 65535,
        'auto': false,
        'nillable': true,
        'readOnly': false,
        'labelAttribute': false,
        'unique': false,
        'visible': true,
        'lookupAttribute': false,
        'isAggregatable': false
      },
      {
        'href': '/api/v2/sys_md_EntityType/meta/labelIt',
        'fieldType': 'STRING',
        'name': 'labelIt',
        'label': 'Label (it)',
        'attributes': [],
        'maxLength': 255,
        'auto': false,
        'nillable': true,
        'readOnly': false,
        'labelAttribute': false,
        'unique': false,
        'visible': true,
        'lookupAttribute': false,
        'isAggregatable': false
      },
      {
        'href': '/api/v2/sys_md_EntityType/meta/descriptionIt',
        'fieldType': 'TEXT',
        'name': 'descriptionIt',
        'label': 'Description (it)',
        'attributes': [],
        'maxLength': 65535,
        'auto': false,
        'nillable': true,
        'readOnly': false,
        'labelAttribute': false,
        'unique': false,
        'visible': true,
        'lookupAttribute': false,
        'isAggregatable': false
      },
      {
        'href': '/api/v2/sys_md_EntityType/meta/labelPt',
        'fieldType': 'STRING',
        'name': 'labelPt',
        'label': 'Label (pt)',
        'attributes': [],
        'maxLength': 255,
        'auto': false,
        'nillable': true,
        'readOnly': false,
        'labelAttribute': false,
        'unique': false,
        'visible': true,
        'lookupAttribute': false,
        'isAggregatable': false
      },
      {
        'href': '/api/v2/sys_md_EntityType/meta/descriptionPt',
        'fieldType': 'TEXT',
        'name': 'descriptionPt',
        'label': 'Description (pt)',
        'attributes': [],
        'maxLength': 65535,
        'auto': false,
        'nillable': true,
        'readOnly': false,
        'labelAttribute': false,
        'unique': false,
        'visible': true,
        'lookupAttribute': false,
        'isAggregatable': false
      },
      {
        'href': '/api/v2/sys_md_EntityType/meta/labelFr',
        'fieldType': 'STRING',
        'name': 'labelFr',
        'label': 'Label (fr)',
        'attributes': [],
        'maxLength': 255,
        'auto': false,
        'nillable': true,
        'readOnly': false,
        'labelAttribute': false,
        'unique': false,
        'visible': true,
        'lookupAttribute': false,
        'isAggregatable': false
      },
      {
        'href': '/api/v2/sys_md_EntityType/meta/descriptionFr',
        'fieldType': 'TEXT',
        'name': 'descriptionFr',
        'label': 'Description (fr)',
        'attributes': [],
        'maxLength': 65535,
        'auto': false,
        'nillable': true,
        'readOnly': false,
        'labelAttribute': false,
        'unique': false,
        'visible': true,
        'lookupAttribute': false,
        'isAggregatable': false
      },
      {
        'href': '/api/v2/sys_md_EntityType/meta/labelXx',
        'fieldType': 'STRING',
        'name': 'labelXx',
        'label': 'Label (xx)',
        'attributes': [],
        'maxLength': 255,
        'auto': false,
        'nillable': true,
        'readOnly': false,
        'labelAttribute': false,
        'unique': false,
        'visible': true,
        'lookupAttribute': false,
        'isAggregatable': false
      },
      {
        'href': '/api/v2/sys_md_EntityType/meta/descriptionXx',
        'fieldType': 'TEXT',
        'name': 'descriptionXx',
        'label': 'Description (xx)',
        'attributes': [],
        'maxLength': 65535,
        'auto': false,
        'nillable': true,
        'readOnly': false,
        'labelAttribute': false,
        'unique': false,
        'visible': true,
        'lookupAttribute': false,
        'isAggregatable': false
      }
    ],
    'labelAttribute': 'label',
    'idAttribute': 'id',
    'lookupAttributes': [
      'label'
    ],
    'isAbstract': false,
    'writable': true,
    'languageCode': 'en'
  },
  'start': 0,
  'num': 100,
  'total': 77,
  'items': [
    {
      '_href': '/api/v2/sys_md_EntityType/sys_idx_IndexActionGroup',
      'id': 'sys_idx_IndexActionGroup',
      'label': 'Index action group',
      'description': 'This entity is used to group the index actions.',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_idx',
        'id': 'sys_idx',
        'label': 'Index'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve33v6qwh3fjc7yaau',
          'id': 'aaaacw4qve33v6qwh3fjc7yaau',
          'name': 'id'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve33v6qwh3fjc7yaay',
          'id': 'aaaacw4qve33v6qwh3fjc7yaay',
          'name': 'count'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_StaticContent',
      'id': 'sys_StaticContent',
      'label': 'Static content',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys',
        'id': 'sys',
        'label': 'System'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34n6qwh3fjc7yaae',
          'id': 'aaaacw4qve34n6qwh3fjc7yaae',
          'name': 'key_'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34n6qwh3fjc7yaai',
          'id': 'aaaacw4qve34n6qwh3fjc7yaai',
          'name': 'content'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_L10nString',
      'id': 'sys_L10nString',
      'label': 'Localization',
      'description': 'Translated language strings',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys',
        'id': 'sys',
        'label': 'System'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35l6qwh3fjc7yabe',
          'id': 'aaaacw4qve35l6qwh3fjc7yabe',
          'name': 'id'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35l6qwh3fjc7yabi',
          'id': 'aaaacw4qve35l6qwh3fjc7yabi',
          'name': 'msgid'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35l6qwh3fjc7yabm',
          'id': 'aaaacw4qve35l6qwh3fjc7yabm',
          'name': 'namespace'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35n6qwh3fjc7yaae',
          'id': 'aaaacw4qve35n6qwh3fjc7yaae',
          'name': 'description'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3536qwh3fjc7yaau',
          'id': 'aaaacw4qve3536qwh3fjc7yaau',
          'name': 'en'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3556qwh3fjc7yaaq',
          'id': 'aaaacw4qve3556qwh3fjc7yaaq',
          'name': 'nl'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3556qwh3fjc7yabe',
          'id': 'aaaacw4qve3556qwh3fjc7yabe',
          'name': 'de'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3576qwh3fjc7yaau',
          'id': 'aaaacw4qve3576qwh3fjc7yaau',
          'name': 'es'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve36b6qwh3fjc7yaae',
          'id': 'aaaacw4qve36b6qwh3fjc7yaae',
          'name': 'it'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve36b6qwh3fjc7yaay',
          'id': 'aaaacw4qve36b6qwh3fjc7yaay',
          'name': 'pt'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve36l6qwh3fjc7yaae',
          'id': 'aaaacw4qve36l6qwh3fjc7yaae',
          'name': 'fr'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve36n6qwh3fjc7yaai',
          'id': 'aaaacw4qve36n6qwh3fjc7yaai',
          'name': 'xx'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_scr_ScriptType',
      'id': 'sys_scr_ScriptType',
      'label': 'Script type',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_scr',
        'id': 'sys_scr',
        'label': 'Script'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve33v6qwh3fjc7yaaq',
          'id': 'aaaacw4qve33v6qwh3fjc7yaaq',
          'name': 'name'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_ont_Ontology',
      'id': 'sys_ont_Ontology',
      'label': 'Ontology',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_ont',
        'id': 'sys_ont',
        'label': 'Ontology'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34b6qwh3fjc7yaae',
          'id': 'aaaacw4qve34b6qwh3fjc7yaae',
          'name': 'id'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34b6qwh3fjc7yaai',
          'id': 'aaaacw4qve34b6qwh3fjc7yaai',
          'name': 'ontologyIRI'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34b6qwh3fjc7yaam',
          'id': 'aaaacw4qve34b6qwh3fjc7yaam',
          'name': 'ontologyName'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_scr_ScriptParameter',
      'id': 'sys_scr_ScriptParameter',
      'label': 'Script parameter',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_scr',
        'id': 'sys_scr',
        'label': 'Script'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve33z6qwh3fjc7yaai',
          'id': 'aaaacw4qve33z6qwh3fjc7yaai',
          'name': 'name'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_ont_TermFrequency',
      'id': 'sys_ont_TermFrequency',
      'label': 'Term frequency',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_ont',
        'id': 'sys_ont',
        'label': 'Ontology'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34r6qwh3fjc7yaaq',
          'id': 'aaaacw4qve34r6qwh3fjc7yaaq',
          'name': 'id'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34r6qwh3fjc7yaau',
          'id': 'aaaacw4qve34r6qwh3fjc7yaau',
          'name': 'term'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34r6qwh3fjc7yaay',
          'id': 'aaaacw4qve34r6qwh3fjc7yaay',
          'name': 'frequency'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34r6qwh3fjc7yaa4',
          'id': 'aaaacw4qve34r6qwh3fjc7yaa4',
          'name': 'occurrence'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_md_Tag',
      'id': 'sys_md_Tag',
      'label': 'Tag',
      'description': 'Semantic tags that can be applied to entities, attributes and other data',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_md',
        'id': 'sys_md',
        'label': 'Meta'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve33v6qwh3fjc7yaa4',
          'id': 'aaaacw4qve33v6qwh3fjc7yaa4',
          'name': 'id'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve33v6qwh3fjc7yaba',
          'id': 'aaaacw4qve33v6qwh3fjc7yaba',
          'name': 'objectIRI'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve33v6qwh3fjc7yabe',
          'id': 'aaaacw4qve33v6qwh3fjc7yabe',
          'name': 'label'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve33v6qwh3fjc7yabi',
          'id': 'aaaacw4qve33v6qwh3fjc7yabi',
          'name': 'relationIRI'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve33v6qwh3fjc7yabm',
          'id': 'aaaacw4qve33v6qwh3fjc7yabm',
          'name': 'relationLabel'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve33x6qwh3fjc7yaae',
          'id': 'aaaacw4qve33x6qwh3fjc7yaae',
          'name': 'codeSystem'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_ont_OntologyTermNodePath',
      'id': 'sys_ont_OntologyTermNodePath',
      'label': 'Ontology term node path',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_ont',
        'id': 'sys_ont',
        'label': 'Ontology'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34v6qwh3fjc7yaae',
          'id': 'aaaacw4qve34v6qwh3fjc7yaae',
          'name': 'id'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34v6qwh3fjc7yaai',
          'id': 'aaaacw4qve34v6qwh3fjc7yaai',
          'name': 'nodePath'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34v6qwh3fjc7yaam',
          'id': 'aaaacw4qve34v6qwh3fjc7yaam',
          'name': 'root'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_set_settings',
      'id': 'sys_set_settings',
      'label': 'Settings',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_set',
        'id': 'sys_set',
        'label': 'Settings'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve33t6qwh3fjc7yaau',
          'id': 'aaaacw4qve33t6qwh3fjc7yaau',
          'name': 'id'
        }
      ],
      'isAbstract': true,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_JobExecution',
      'id': 'sys_JobExecution',
      'label': 'Job execution',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys',
        'id': 'sys',
        'label': 'System'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35n6qwh3fjc7yaai',
          'id': 'aaaacw4qve35n6qwh3fjc7yaai',
          'name': 'identifier'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35n6qwh3fjc7yaam',
          'id': 'aaaacw4qve35n6qwh3fjc7yaam',
          'name': 'user'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35n6qwh3fjc7yaaq',
          'id': 'aaaacw4qve35n6qwh3fjc7yaaq',
          'name': 'status'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35n6qwh3fjc7yaau',
          'id': 'aaaacw4qve35n6qwh3fjc7yaau',
          'name': 'type'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35n6qwh3fjc7yaay',
          'id': 'aaaacw4qve35n6qwh3fjc7yaay',
          'name': 'submissionDate'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35n6qwh3fjc7yaa4',
          'id': 'aaaacw4qve35n6qwh3fjc7yaa4',
          'name': 'startDate'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35n6qwh3fjc7yaba',
          'id': 'aaaacw4qve35n6qwh3fjc7yaba',
          'name': 'endDate'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35n6qwh3fjc7yabe',
          'id': 'aaaacw4qve35n6qwh3fjc7yabe',
          'name': 'progressInt'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35n6qwh3fjc7yabi',
          'id': 'aaaacw4qve35n6qwh3fjc7yabi',
          'name': 'progressMax'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35n6qwh3fjc7yabm',
          'id': 'aaaacw4qve35n6qwh3fjc7yabm',
          'name': 'progressMessage'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35n6qwh3fjc7yabq',
          'id': 'aaaacw4qve35n6qwh3fjc7yabq',
          'name': 'log'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35n6qwh3fjc7yabu',
          'id': 'aaaacw4qve35n6qwh3fjc7yabu',
          'name': 'resultUrl'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35n6qwh3fjc7yaby',
          'id': 'aaaacw4qve35n6qwh3fjc7yaby',
          'name': 'failureEmail'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35n6qwh3fjc7yab4',
          'id': 'aaaacw4qve35n6qwh3fjc7yab4',
          'name': 'successEmail'
        }
      ],
      'isAbstract': true,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_ont_OntologyTermHit',
      'id': 'sys_ont_OntologyTermHit',
      'label': 'Ontology term hit',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_ont',
        'id': 'sys_ont',
        'label': 'Ontology'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34p6qwh3fjc7yaau',
          'id': 'aaaacw4qve34p6qwh3fjc7yaau',
          'name': 'id'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34p6qwh3fjc7yaay',
          'id': 'aaaacw4qve34p6qwh3fjc7yaay',
          'name': 'Score'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34p6qwh3fjc7yaa4',
          'id': 'aaaacw4qve34p6qwh3fjc7yaa4',
          'name': 'Combined_Score'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_ont_OntologyTermSynonym',
      'id': 'sys_ont_OntologyTermSynonym',
      'label': 'Ontology term synonym',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_ont',
        'id': 'sys_ont',
        'label': 'Ontology'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3436qwh3fjc7yaai',
          'id': 'aaaacw4qve3436qwh3fjc7yaai',
          'name': 'id'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3436qwh3fjc7yaam',
          'id': 'aaaacw4qve3436qwh3fjc7yaam',
          'name': 'ontologyTermSynonym'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3436qwh3fjc7yaaq',
          'id': 'aaaacw4qve3436qwh3fjc7yaaq',
          'name': 'Score'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3436qwh3fjc7yaau',
          'id': 'aaaacw4qve3436qwh3fjc7yaau',
          'name': 'Combined_Score'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_ont_MatchingTaskContent',
      'id': 'sys_ont_MatchingTaskContent',
      'label': 'Matching task content',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_ont',
        'id': 'sys_ont',
        'label': 'Ontology'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35h6qwh3fjc7yabm',
          'id': 'aaaacw4qve35h6qwh3fjc7yabm',
          'name': 'identifier'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35h6qwh3fjc7yabq',
          'id': 'aaaacw4qve35h6qwh3fjc7yabq',
          'name': 'matchTerm'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35j6qwh3fjc7yaae',
          'id': 'aaaacw4qve35j6qwh3fjc7yaae',
          'name': 'score'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35j6qwh3fjc7yaai',
          'id': 'aaaacw4qve35j6qwh3fjc7yaai',
          'name': 'validated'
        }
      ],
      'isAbstract': true,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_sec_Owned',
      'id': 'sys_sec_Owned',
      'label': 'Owned',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_sec',
        'id': 'sys_sec',
        'label': 'Security'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3336qwh3fjc7yaae',
          'id': 'aaaacw4qve3336qwh3fjc7yaae',
          'name': 'ownerUsername'
        }
      ],
      'isAbstract': true,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_GeneNetworkScore',
      'id': 'sys_GeneNetworkScore',
      'label': 'Gene Network Score',
      'description': 'The gene network score for a combination of a gene and a hpo term',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys',
        'id': 'sys',
        'label': 'System'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34v6qwh3fjc7yaau',
          'id': 'aaaacw4qve34v6qwh3fjc7yaau',
          'name': 'id'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34v6qwh3fjc7yaay',
          'id': 'aaaacw4qve34v6qwh3fjc7yaay',
          'name': 'hpo'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34v6qwh3fjc7yaa4',
          'id': 'aaaacw4qve34v6qwh3fjc7yaa4',
          'name': 'ensemblId'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34v6qwh3fjc7yaba',
          'id': 'aaaacw4qve34v6qwh3fjc7yaba',
          'name': 'hugo'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34v6qwh3fjc7yabe',
          'id': 'aaaacw4qve34v6qwh3fjc7yabe',
          'name': 'score'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_sec_User',
      'id': 'sys_sec_User',
      'label': 'User',
      'description': 'Anyone who can login',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_sec',
        'id': 'sys_sec',
        'label': 'Security'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35d6qwh3fjc7yaai',
          'id': 'aaaacw4qve35d6qwh3fjc7yaai',
          'name': 'id'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35d6qwh3fjc7yaam',
          'id': 'aaaacw4qve35d6qwh3fjc7yaam',
          'name': 'username'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35d6qwh3fjc7yaaq',
          'id': 'aaaacw4qve35d6qwh3fjc7yaaq',
          'name': 'password_'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35d6qwh3fjc7yaau',
          'id': 'aaaacw4qve35d6qwh3fjc7yaau',
          'name': 'activationCode'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35d6qwh3fjc7yaay',
          'id': 'aaaacw4qve35d6qwh3fjc7yaay',
          'name': 'active'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35d6qwh3fjc7yaa4',
          'id': 'aaaacw4qve35d6qwh3fjc7yaa4',
          'name': 'superuser'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35d6qwh3fjc7yaba',
          'id': 'aaaacw4qve35d6qwh3fjc7yaba',
          'name': 'FirstName'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35d6qwh3fjc7yabe',
          'id': 'aaaacw4qve35d6qwh3fjc7yabe',
          'name': 'MiddleNames'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35d6qwh3fjc7yabi',
          'id': 'aaaacw4qve35d6qwh3fjc7yabi',
          'name': 'LastName'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35d6qwh3fjc7yabm',
          'id': 'aaaacw4qve35d6qwh3fjc7yabm',
          'name': 'Title'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35d6qwh3fjc7yabq',
          'id': 'aaaacw4qve35d6qwh3fjc7yabq',
          'name': 'Affiliation'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35d6qwh3fjc7yabu',
          'id': 'aaaacw4qve35d6qwh3fjc7yabu',
          'name': 'Department'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35f6qwh3fjc7yaae',
          'id': 'aaaacw4qve35f6qwh3fjc7yaae',
          'name': 'Role'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35f6qwh3fjc7yaai',
          'id': 'aaaacw4qve35f6qwh3fjc7yaai',
          'name': 'Address'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35f6qwh3fjc7yaam',
          'id': 'aaaacw4qve35f6qwh3fjc7yaam',
          'name': 'Phone'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35f6qwh3fjc7yaaq',
          'id': 'aaaacw4qve35f6qwh3fjc7yaaq',
          'name': 'Email'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35f6qwh3fjc7yaau',
          'id': 'aaaacw4qve35f6qwh3fjc7yaau',
          'name': 'Fax'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35f6qwh3fjc7yaay',
          'id': 'aaaacw4qve35f6qwh3fjc7yaay',
          'name': 'tollFreePhone'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35f6qwh3fjc7yaa4',
          'id': 'aaaacw4qve35f6qwh3fjc7yaa4',
          'name': 'City'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35f6qwh3fjc7yaba',
          'id': 'aaaacw4qve35f6qwh3fjc7yaba',
          'name': 'Country'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35f6qwh3fjc7yabe',
          'id': 'aaaacw4qve35f6qwh3fjc7yabe',
          'name': 'changePassword'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35f6qwh3fjc7yabi',
          'id': 'aaaacw4qve35f6qwh3fjc7yabi',
          'name': 'languageCode'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35f6qwh3fjc7yabm',
          'id': 'aaaacw4qve35f6qwh3fjc7yabm',
          'name': 'googleAccountId'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_FreemarkerTemplate',
      'id': 'sys_FreemarkerTemplate',
      'label': 'Freemarker template',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys',
        'id': 'sys',
        'label': 'System'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34h6qwh3fjc7yaam',
          'id': 'aaaacw4qve34h6qwh3fjc7yaam',
          'name': 'id'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34h6qwh3fjc7yaaq',
          'id': 'aaaacw4qve34h6qwh3fjc7yaaq',
          'name': 'Name'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34h6qwh3fjc7yaau',
          'id': 'aaaacw4qve34h6qwh3fjc7yaau',
          'name': 'Value'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_sec_authority',
      'id': 'sys_sec_authority',
      'label': 'Authority',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_sec',
        'id': 'sys_sec',
        'label': 'Security'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3456qwh3fjc7yaae',
          'id': 'aaaacw4qve3456qwh3fjc7yaae',
          'name': 'role'
        }
      ],
      'isAbstract': true,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_ont_OntologyTermDynamicAnnotation',
      'id': 'sys_ont_OntologyTermDynamicAnnotation',
      'label': 'Ontology term dynamic annotation',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_ont',
        'id': 'sys_ont',
        'label': 'Ontology'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35l6qwh3fjc7yaae',
          'id': 'aaaacw4qve35l6qwh3fjc7yaae',
          'name': 'id'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35l6qwh3fjc7yaai',
          'id': 'aaaacw4qve35l6qwh3fjc7yaai',
          'name': 'name'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35l6qwh3fjc7yaam',
          'id': 'aaaacw4qve35l6qwh3fjc7yaam',
          'name': 'value'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35l6qwh3fjc7yaaq',
          'id': 'aaaacw4qve35l6qwh3fjc7yaaq',
          'name': 'label'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_Language',
      'id': 'sys_Language',
      'label': 'Language',
      'description': 'Web application languages',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys',
        'id': 'sys',
        'label': 'System'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve33v6qwh3fjc7yaae',
          'id': 'aaaacw4qve33v6qwh3fjc7yaae',
          'name': 'code'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve33v6qwh3fjc7yaai',
          'id': 'aaaacw4qve33v6qwh3fjc7yaai',
          'name': 'name'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve33v6qwh3fjc7yaam',
          'id': 'aaaacw4qve33v6qwh3fjc7yaam',
          'name': 'active'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_md_Property',
      'id': 'sys_md_Property',
      'label': 'Property',
      'description': 'Abstract class for key/value properties.',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_md',
        'id': 'sys_md',
        'label': 'Meta'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34t6qwh3fjc7yaau',
          'id': 'aaaacw4qve34t6qwh3fjc7yaau',
          'name': 'key'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34t6qwh3fjc7yaay',
          'id': 'aaaacw4qve34t6qwh3fjc7yaay',
          'name': 'value'
        }
      ],
      'isAbstract': true,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_map_AttributeMapping',
      'id': 'sys_map_AttributeMapping',
      'label': 'Attribute mapping',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_map',
        'id': 'sys_map',
        'label': 'Mapper'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35j6qwh3fjc7yaam',
          'id': 'aaaacw4qve35j6qwh3fjc7yaam',
          'name': 'identifier'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35j6qwh3fjc7yaaq',
          'id': 'aaaacw4qve35j6qwh3fjc7yaaq',
          'name': 'targetAttribute'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35j6qwh3fjc7yaau',
          'id': 'aaaacw4qve35j6qwh3fjc7yaau',
          'name': 'sourceAttributes'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35j6qwh3fjc7yaay',
          'id': 'aaaacw4qve35j6qwh3fjc7yaay',
          'name': 'algorithm'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35j6qwh3fjc7yaa4',
          'id': 'aaaacw4qve35j6qwh3fjc7yaa4',
          'name': 'algorithmState'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_set_CGD',
      'id': 'sys_set_CGD',
      'label': 'CGD annotator settings',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_set',
        'id': 'sys_set',
        'label': 'Settings'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3356qwh3fjc7yaau',
          'id': 'aaaacw4qve3356qwh3fjc7yaau',
          'name': 'cgdLocation'
        }
      ],
      'isAbstract': false,
      'extends': {
        '_href': '/api/v2/sys_md_EntityType/sys_set_settings',
        'id': 'sys_set_settings',
        'label': 'Settings'
      },
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_set_genomicdata',
      'id': 'sys_set_genomicdata',
      'label': 'Genomic data settings',
      'description': 'Settings for genomic data sets.',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_set',
        'id': 'sys_set',
        'label': 'Settings'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35h6qwh3fjc7yaae',
          'id': 'aaaacw4qve35h6qwh3fjc7yaae',
          'name': 'start'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35h6qwh3fjc7yaai',
          'id': 'aaaacw4qve35h6qwh3fjc7yaai',
          'name': 'chromosome'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35h6qwh3fjc7yaam',
          'id': 'aaaacw4qve35h6qwh3fjc7yaam',
          'name': 'ref'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35h6qwh3fjc7yaaq',
          'id': 'aaaacw4qve35h6qwh3fjc7yaaq',
          'name': 'alt'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35h6qwh3fjc7yaau',
          'id': 'aaaacw4qve35h6qwh3fjc7yaau',
          'name': 'identifier'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35h6qwh3fjc7yaay',
          'id': 'aaaacw4qve35h6qwh3fjc7yaay',
          'name': 'stop'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35h6qwh3fjc7yaa4',
          'id': 'aaaacw4qve35h6qwh3fjc7yaa4',
          'name': 'description'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35h6qwh3fjc7yaba',
          'id': 'aaaacw4qve35h6qwh3fjc7yaba',
          'name': 'patient_id'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35h6qwh3fjc7yabe',
          'id': 'aaaacw4qve35h6qwh3fjc7yabe',
          'name': 'name'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35h6qwh3fjc7yabi',
          'id': 'aaaacw4qve35h6qwh3fjc7yabi',
          'name': 'linkout'
        }
      ],
      'isAbstract': false,
      'extends': {
        '_href': '/api/v2/sys_md_EntityType/sys_set_settings',
        'id': 'sys_set_settings',
        'label': 'Settings'
      },
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_set_hpo',
      'id': 'sys_set_hpo',
      'label': 'HPO annotator settings',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_set',
        'id': 'sys_set',
        'label': 'Settings'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34p6qwh3fjc7yaaq',
          'id': 'aaaacw4qve34p6qwh3fjc7yaaq',
          'name': 'hpoLocation'
        }
      ],
      'isAbstract': false,
      'extends': {
        '_href': '/api/v2/sys_md_EntityType/sys_set_settings',
        'id': 'sys_set_settings',
        'label': 'Settings'
      },
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_set_clinvar',
      'id': 'sys_set_clinvar',
      'label': 'Clinvar annotator settings',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_set',
        'id': 'sys_set',
        'label': 'Settings'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3436qwh3fjc7yaay',
          'id': 'aaaacw4qve3436qwh3fjc7yaay',
          'name': 'clinvarLocation'
        }
      ],
      'isAbstract': false,
      'extends': {
        '_href': '/api/v2/sys_md_EntityType/sys_set_settings',
        'id': 'sys_set_settings',
        'label': 'Settings'
      },
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_Questionnaire',
      'id': 'sys_Questionnaire',
      'label': 'Questionnaire',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys',
        'id': 'sys',
        'label': 'System'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34z6qwh3fjc7yaay',
          'id': 'aaaacw4qve34z6qwh3fjc7yaay',
          'name': 'status'
        }
      ],
      'isAbstract': true,
      'extends': {
        '_href': '/api/v2/sys_md_EntityType/sys_sec_Owned',
        'id': 'sys_sec_Owned',
        'label': 'Owned'
      },
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_set_dataexplorer',
      'id': 'sys_set_dataexplorer',
      'label': 'Data explorer settings',
      'description': 'Settings for the data explorer plugin.',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_set',
        'id': 'sys_set',
        'label': 'Settings'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34b6qwh3fjc7yaaq',
          'id': 'aaaacw4qve34b6qwh3fjc7yaaq',
          'name': 'general_'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34b6qwh3fjc7yaau',
          'id': 'aaaacw4qve34b6qwh3fjc7yaau',
          'name': 'searchbox'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34b6qwh3fjc7yaay',
          'id': 'aaaacw4qve34b6qwh3fjc7yaay',
          'name': 'item_select_panel'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34b6qwh3fjc7yaa4',
          'id': 'aaaacw4qve34b6qwh3fjc7yaa4',
          'name': 'launch_wizard'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34b6qwh3fjc7yaba',
          'id': 'aaaacw4qve34b6qwh3fjc7yaba',
          'name': 'header_abbreviate'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34b6qwh3fjc7yabe',
          'id': 'aaaacw4qve34b6qwh3fjc7yabe',
          'name': 'mods'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34b6qwh3fjc7yabi',
          'id': 'aaaacw4qve34b6qwh3fjc7yabi',
          'name': 'mod_aggregates'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34d6qwh3fjc7yaae',
          'id': 'aaaacw4qve34d6qwh3fjc7yaae',
          'name': 'aggregates'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34d6qwh3fjc7yaai',
          'id': 'aaaacw4qve34d6qwh3fjc7yaai',
          'name': 'agg_distinct'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34d6qwh3fjc7yaam',
          'id': 'aaaacw4qve34d6qwh3fjc7yaam',
          'name': 'agg_distinct_overrides'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34d6qwh3fjc7yaaq',
          'id': 'aaaacw4qve34d6qwh3fjc7yaaq',
          'name': 'mod_annotators'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34d6qwh3fjc7yaau',
          'id': 'aaaacw4qve34d6qwh3fjc7yaau',
          'name': 'mod_charts'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34d6qwh3fjc7yaay',
          'id': 'aaaacw4qve34d6qwh3fjc7yaay',
          'name': 'mod_data'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34d6qwh3fjc7yaa4',
          'id': 'aaaacw4qve34d6qwh3fjc7yaa4',
          'name': 'data'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34d6qwh3fjc7yaba',
          'id': 'aaaacw4qve34d6qwh3fjc7yaba',
          'name': 'data_galaxy_export'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34d6qwh3fjc7yabe',
          'id': 'aaaacw4qve34d6qwh3fjc7yabe',
          'name': 'data_galaxy_url'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34d6qwh3fjc7yabi',
          'id': 'aaaacw4qve34d6qwh3fjc7yabi',
          'name': 'data_galaxy_api_key'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34f6qwh3fjc7yaae',
          'id': 'aaaacw4qve34f6qwh3fjc7yaae',
          'name': 'genomebrowser'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34f6qwh3fjc7yaai',
          'id': 'aaaacw4qve34f6qwh3fjc7yaai',
          'name': 'gb_init'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34f6qwh3fjc7yaam',
          'id': 'aaaacw4qve34f6qwh3fjc7yaam',
          'name': 'gb_init_browser_links'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34f6qwh3fjc7yaaq',
          'id': 'aaaacw4qve34f6qwh3fjc7yaaq',
          'name': 'gb_init_coord_system'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34f6qwh3fjc7yaau',
          'id': 'aaaacw4qve34f6qwh3fjc7yaau',
          'name': 'gb_init_location'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34f6qwh3fjc7yaay',
          'id': 'aaaacw4qve34f6qwh3fjc7yaay',
          'name': 'gb_init_sources'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34f6qwh3fjc7yaa4',
          'id': 'aaaacw4qve34f6qwh3fjc7yaa4',
          'name': 'gb_init_highlight_region'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34f6qwh3fjc7yaba',
          'id': 'aaaacw4qve34f6qwh3fjc7yaba',
          'name': 'data_genome_browser'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34f6qwh3fjc7yabe',
          'id': 'aaaacw4qve34f6qwh3fjc7yabe',
          'name': 'mod_reports'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34h6qwh3fjc7yaae',
          'id': 'aaaacw4qve34h6qwh3fjc7yaae',
          'name': 'reports'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34h6qwh3fjc7yaai',
          'id': 'aaaacw4qve34h6qwh3fjc7yaai',
          'name': 'reports_entities'
        }
      ],
      'isAbstract': false,
      'extends': {
        '_href': '/api/v2/sys_md_EntityType/sys_set_settings',
        'id': 'sys_set_settings',
        'label': 'Settings'
      },
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_set_exac',
      'id': 'sys_set_exac',
      'label': 'Exac annotator settings',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_set',
        'id': 'sys_set',
        'label': 'Settings'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34v6qwh3fjc7yaaq',
          'id': 'aaaacw4qve34v6qwh3fjc7yaaq',
          'name': 'exacLocation'
        }
      ],
      'isAbstract': false,
      'extends': {
        '_href': '/api/v2/sys_md_EntityType/sys_set_settings',
        'id': 'sys_set_settings',
        'label': 'Settings'
      },
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_sec_Token',
      'id': 'sys_sec_Token',
      'label': 'Token',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_sec',
        'id': 'sys_sec',
        'label': 'Security'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35p6qwh3fjc7yaae',
          'id': 'aaaacw4qve35p6qwh3fjc7yaae',
          'name': 'id'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35p6qwh3fjc7yaai',
          'id': 'aaaacw4qve35p6qwh3fjc7yaai',
          'name': 'User'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35p6qwh3fjc7yaam',
          'id': 'aaaacw4qve35p6qwh3fjc7yaam',
          'name': 'token'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35p6qwh3fjc7yaaq',
          'id': 'aaaacw4qve35p6qwh3fjc7yaaq',
          'name': 'expirationDate'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35p6qwh3fjc7yaau',
          'id': 'aaaacw4qve35p6qwh3fjc7yaau',
          'name': 'creationDate'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35p6qwh3fjc7yaay',
          'id': 'aaaacw4qve35p6qwh3fjc7yaay',
          'name': 'description'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_idx_IndexAction',
      'id': 'sys_idx_IndexAction',
      'label': 'Index action',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_idx',
        'id': 'sys_idx',
        'label': 'Index'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34j6qwh3fjc7yaau',
          'id': 'aaaacw4qve34j6qwh3fjc7yaau',
          'name': 'id'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34l6qwh3fjc7yaae',
          'id': 'aaaacw4qve34l6qwh3fjc7yaae',
          'name': 'indexActionGroup'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34l6qwh3fjc7yaai',
          'id': 'aaaacw4qve34l6qwh3fjc7yaai',
          'name': 'actionOrder'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34l6qwh3fjc7yaam',
          'id': 'aaaacw4qve34l6qwh3fjc7yaam',
          'name': 'entityTypeId'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34l6qwh3fjc7yaaq',
          'id': 'aaaacw4qve34l6qwh3fjc7yaaq',
          'name': 'entityId'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34l6qwh3fjc7yaau',
          'id': 'aaaacw4qve34l6qwh3fjc7yaau',
          'name': 'indexStatus'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_idx_IndexJobExecution',
      'id': 'sys_idx_IndexJobExecution',
      'label': 'Index job execution',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_idx',
        'id': 'sys_idx',
        'label': 'Index'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35r6qwh3fjc7yaae',
          'id': 'aaaacw4qve35r6qwh3fjc7yaae',
          'name': 'indexActionJobID'
        }
      ],
      'isAbstract': false,
      'extends': {
        '_href': '/api/v2/sys_md_EntityType/sys_JobExecution',
        'id': 'sys_JobExecution',
        'label': 'Job execution'
      },
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_sec_UserAuthority',
      'id': 'sys_sec_UserAuthority',
      'label': 'User authority',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_sec',
        'id': 'sys_sec',
        'label': 'Security'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35t6qwh3fjc7yabe',
          'id': 'aaaacw4qve35t6qwh3fjc7yabe',
          'name': 'id'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35t6qwh3fjc7yabi',
          'id': 'aaaacw4qve35t6qwh3fjc7yabi',
          'name': 'User'
        }
      ],
      'isAbstract': false,
      'extends': {
        '_href': '/api/v2/sys_md_EntityType/sys_sec_authority',
        'id': 'sys_sec_authority',
        'label': 'Authority'
      },
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_set_gonl',
      'id': 'sys_set_gonl',
      'label': 'GoNL annotator settings',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_set',
        'id': 'sys_set',
        'label': 'Settings'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35l6qwh3fjc7yaau',
          'id': 'aaaacw4qve35l6qwh3fjc7yaau',
          'name': 'rootDirectory'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35l6qwh3fjc7yaay',
          'id': 'aaaacw4qve35l6qwh3fjc7yaay',
          'name': 'chromosomes'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35l6qwh3fjc7yaa4',
          'id': 'aaaacw4qve35l6qwh3fjc7yaa4',
          'name': 'filepattern'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35l6qwh3fjc7yaba',
          'id': 'aaaacw4qve35l6qwh3fjc7yaba',
          'name': 'overrideChromosomeFiles'
        }
      ],
      'isAbstract': false,
      'extends': {
        '_href': '/api/v2/sys_md_EntityType/sys_set_settings',
        'id': 'sys_set_settings',
        'label': 'Settings'
      },
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_set_Gavin',
      'id': 'sys_set_Gavin',
      'label': 'Gavin annotator settings',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_set',
        'id': 'sys_set',
        'label': 'Settings'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3436qwh3fjc7yaae',
          'id': 'aaaacw4qve3436qwh3fjc7yaae',
          'name': 'variantFileLocation'
        }
      ],
      'isAbstract': false,
      'extends': {
        '_href': '/api/v2/sys_md_EntityType/sys_set_settings',
        'id': 'sys_set_settings',
        'label': 'Settings'
      },
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_FileMeta',
      'id': 'sys_FileMeta',
      'label': 'File metadata',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys',
        'id': 'sys',
        'label': 'System'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35r6qwh3fjc7yaa4',
          'id': 'aaaacw4qve35r6qwh3fjc7yaa4',
          'name': 'id'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35r6qwh3fjc7yaba',
          'id': 'aaaacw4qve35r6qwh3fjc7yaba',
          'name': 'filename'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35r6qwh3fjc7yabe',
          'id': 'aaaacw4qve35r6qwh3fjc7yabe',
          'name': 'contentType'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35r6qwh3fjc7yabi',
          'id': 'aaaacw4qve35r6qwh3fjc7yabi',
          'name': 'size'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35r6qwh3fjc7yabm',
          'id': 'aaaacw4qve35r6qwh3fjc7yabm',
          'name': 'url'
        }
      ],
      'isAbstract': false,
      'extends': {
        '_href': '/api/v2/sys_md_EntityType/sys_sec_Owned',
        'id': 'sys_sec_Owned',
        'label': 'Owned'
      },
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_set_fitcon',
      'id': 'sys_set_fitcon',
      'label': 'Fitcon annotator settings',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_set',
        'id': 'sys_set',
        'label': 'Settings'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34r6qwh3fjc7yaba',
          'id': 'aaaacw4qve34r6qwh3fjc7yaba',
          'name': 'fitconLocation'
        }
      ],
      'isAbstract': false,
      'extends': {
        '_href': '/api/v2/sys_md_EntityType/sys_set_settings',
        'id': 'sys_set_settings',
        'label': 'Settings'
      },
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_ImportRun',
      'id': 'sys_ImportRun',
      'label': 'Import',
      'description': 'Data import reports',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys',
        'id': 'sys',
        'label': 'System'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35p6qwh3fjc7yaa4',
          'id': 'aaaacw4qve35p6qwh3fjc7yaa4',
          'name': 'id'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35p6qwh3fjc7yaba',
          'id': 'aaaacw4qve35p6qwh3fjc7yaba',
          'name': 'startDate'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35p6qwh3fjc7yabe',
          'id': 'aaaacw4qve35p6qwh3fjc7yabe',
          'name': 'endDate'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35p6qwh3fjc7yabi',
          'id': 'aaaacw4qve35p6qwh3fjc7yabi',
          'name': 'username'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35p6qwh3fjc7yabm',
          'id': 'aaaacw4qve35p6qwh3fjc7yabm',
          'name': 'status'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35p6qwh3fjc7yabq',
          'id': 'aaaacw4qve35p6qwh3fjc7yabq',
          'name': 'message'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35p6qwh3fjc7yabu',
          'id': 'aaaacw4qve35p6qwh3fjc7yabu',
          'name': 'progress'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35p6qwh3fjc7yaby',
          'id': 'aaaacw4qve35p6qwh3fjc7yaby',
          'name': 'importedEntities'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35p6qwh3fjc7yab4',
          'id': 'aaaacw4qve35p6qwh3fjc7yab4',
          'name': 'notify'
        }
      ],
      'isAbstract': false,
      'extends': {
        '_href': '/api/v2/sys_md_EntityType/sys_sec_Owned',
        'id': 'sys_sec_Owned',
        'label': 'Owned'
      },
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_AnnotationJobExecution',
      'id': 'sys_AnnotationJobExecution',
      'label': 'Annotation job execution',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys',
        'id': 'sys',
        'label': 'System'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34z6qwh3fjc7yaaq',
          'id': 'aaaacw4qve34z6qwh3fjc7yaaq',
          'name': 'targetName'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34z6qwh3fjc7yaau',
          'id': 'aaaacw4qve34z6qwh3fjc7yaau',
          'name': 'annotators'
        }
      ],
      'isAbstract': false,
      'extends': {
        '_href': '/api/v2/sys_md_EntityType/sys_JobExecution',
        'id': 'sys_JobExecution',
        'label': 'Job execution'
      },
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_set_app',
      'id': 'sys_set_app',
      'label': 'Application settings',
      'description': 'General application settings.',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_set',
        'id': 'sys_set',
        'label': 'Settings'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3el6qwh3fjc7yaae',
          'id': 'aaaacw4qve3el6qwh3fjc7yaae',
          'name': 'title'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3el6qwh3fjc7yaai',
          'id': 'aaaacw4qve3el6qwh3fjc7yaai',
          'name': 'signup'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3en6qwh3fjc7yaae',
          'id': 'aaaacw4qve3en6qwh3fjc7yaae',
          'name': 'signup_moderation'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3en6qwh3fjc7yaai',
          'id': 'aaaacw4qve3en6qwh3fjc7yaai',
          'name': 'google_sign_in'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3en6qwh3fjc7yaam',
          'id': 'aaaacw4qve3en6qwh3fjc7yaam',
          'name': 'google_app_client_id'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3en6qwh3fjc7yaaq',
          'id': 'aaaacw4qve3en6qwh3fjc7yaaq',
          'name': 'logo_href_navbar'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3en6qwh3fjc7yaau',
          'id': 'aaaacw4qve3en6qwh3fjc7yaau',
          'name': 'logo_href_top'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3en6qwh3fjc7yaay',
          'id': 'aaaacw4qve3en6qwh3fjc7yaay',
          'name': 'footer'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3en6qwh3fjc7yaa4',
          'id': 'aaaacw4qve3en6qwh3fjc7yaa4',
          'name': 'molgenis_menu'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3zv6qwh3fjc7yaae',
          'id': 'aaaacw4qve3zv6qwh3fjc7yaae',
          'name': 'language_code'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3zx6qwh3fjc7yaae',
          'id': 'aaaacw4qve3zx6qwh3fjc7yaae',
          'name': 'bootstrap_theme'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3zx6qwh3fjc7yaai',
          'id': 'aaaacw4qve3zx6qwh3fjc7yaai',
          'name': 'css_href'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3zx6qwh3fjc7yaam',
          'id': 'aaaacw4qve3zx6qwh3fjc7yaam',
          'name': 'aggregate_threshold'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3zx6qwh3fjc7yaaq',
          'id': 'aaaacw4qve3zx6qwh3fjc7yaaq',
          'name': 'custom_javascript'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3zx6qwh3fjc7yaau',
          'id': 'aaaacw4qve3zx6qwh3fjc7yaau',
          'name': 'tracking'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3zz6qwh3fjc7yaae',
          'id': 'aaaacw4qve3zz6qwh3fjc7yaae',
          'name': 'ga_privacy_friendly'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3zz6qwh3fjc7yaai',
          'id': 'aaaacw4qve3zz6qwh3fjc7yaai',
          'name': 'ga_tracking_id'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3zz6qwh3fjc7yaam',
          'id': 'aaaacw4qve3zz6qwh3fjc7yaam',
          'name': 'ga_acc_privacy_friendly'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3z56qwh3fjc7yaae',
          'id': 'aaaacw4qve3z56qwh3fjc7yaae',
          'name': 'ga_tracking_id_mgs'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3z56qwh3fjc7yaai',
          'id': 'aaaacw4qve3z56qwh3fjc7yaai',
          'name': 'ga_acc_privacy_friendly_mgs'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3z56qwh3fjc7yaam',
          'id': 'aaaacw4qve3z56qwh3fjc7yaam',
          'name': 'tracking_code_footer'
        }
      ],
      'isAbstract': false,
      'extends': {
        '_href': '/api/v2/sys_md_EntityType/sys_set_settings',
        'id': 'sys_set_settings',
        'label': 'Settings'
      },
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_idx_GavinJobExecution',
      'id': 'sys_idx_GavinJobExecution',
      'label': 'Gavin job execution',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_idx',
        'id': 'sys_idx',
        'label': 'Index'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34x6qwh3fjc7yaae',
          'id': 'aaaacw4qve34x6qwh3fjc7yaae',
          'name': 'filename'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34x6qwh3fjc7yaai',
          'id': 'aaaacw4qve34x6qwh3fjc7yaai',
          'name': 'extension'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34x6qwh3fjc7yaam',
          'id': 'aaaacw4qve34x6qwh3fjc7yaam',
          'name': 'comments'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34x6qwh3fjc7yaaq',
          'id': 'aaaacw4qve34x6qwh3fjc7yaaq',
          'name': 'cadds'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34x6qwh3fjc7yaau',
          'id': 'aaaacw4qve34x6qwh3fjc7yaau',
          'name': 'vcfs'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34x6qwh3fjc7yaay',
          'id': 'aaaacw4qve34x6qwh3fjc7yaay',
          'name': 'errors'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34x6qwh3fjc7yaa4',
          'id': 'aaaacw4qve34x6qwh3fjc7yaa4',
          'name': 'indels'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34x6qwh3fjc7yaba',
          'id': 'aaaacw4qve34x6qwh3fjc7yaba',
          'name': 'skippeds'
        }
      ],
      'isAbstract': false,
      'extends': {
        '_href': '/api/v2/sys_md_EntityType/sys_JobExecution',
        'id': 'sys_JobExecution',
        'label': 'Job execution'
      },
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_set_thousandgenomes',
      'id': 'sys_set_thousandgenomes',
      'label': '1000 Genomes annotator settings',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_set',
        'id': 'sys_set',
        'label': 'Settings'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34j6qwh3fjc7yaae',
          'id': 'aaaacw4qve34j6qwh3fjc7yaae',
          'name': 'chromosomes'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34j6qwh3fjc7yaai',
          'id': 'aaaacw4qve34j6qwh3fjc7yaai',
          'name': 'filepattern'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34j6qwh3fjc7yaam',
          'id': 'aaaacw4qve34j6qwh3fjc7yaam',
          'name': 'rootDirectory'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34j6qwh3fjc7yaaq',
          'id': 'aaaacw4qve34j6qwh3fjc7yaaq',
          'name': 'overrideChromosomeFile'
        }
      ],
      'isAbstract': false,
      'extends': {
        '_href': '/api/v2/sys_md_EntityType/sys_set_settings',
        'id': 'sys_set_settings',
        'label': 'Settings'
      },
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_set_dann',
      'id': 'sys_set_dann',
      'label': 'Dann annotator settings',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_set',
        'id': 'sys_set',
        'label': 'Settings'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34z6qwh3fjc7yaam',
          'id': 'aaaacw4qve34z6qwh3fjc7yaam',
          'name': 'dannLocation'
        }
      ],
      'isAbstract': false,
      'extends': {
        '_href': '/api/v2/sys_md_EntityType/sys_set_settings',
        'id': 'sys_set_settings',
        'label': 'Settings'
      },
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_ont_OntologyTerm',
      'id': 'sys_ont_OntologyTerm',
      'label': 'Ontology term',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_ont',
        'id': 'sys_ont',
        'label': 'Ontology'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34x6qwh3fjc7yabe',
          'id': 'aaaacw4qve34x6qwh3fjc7yabe',
          'name': 'id'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34x6qwh3fjc7yabi',
          'id': 'aaaacw4qve34x6qwh3fjc7yabi',
          'name': 'ontologyTermIRI'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34x6qwh3fjc7yabm',
          'id': 'aaaacw4qve34x6qwh3fjc7yabm',
          'name': 'ontologyTermName'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34x6qwh3fjc7yabq',
          'id': 'aaaacw4qve34x6qwh3fjc7yabq',
          'name': 'ontologyTermSynonym'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34x6qwh3fjc7yabu',
          'id': 'aaaacw4qve34x6qwh3fjc7yabu',
          'name': 'ontologyTermDynamicAnnotation'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34z6qwh3fjc7yaae',
          'id': 'aaaacw4qve34z6qwh3fjc7yaae',
          'name': 'nodePath'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34z6qwh3fjc7yaai',
          'id': 'aaaacw4qve34z6qwh3fjc7yaai',
          'name': 'ontology'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_sec_Group',
      'id': 'sys_sec_Group',
      'label': 'Group',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_sec',
        'id': 'sys_sec',
        'label': 'Security'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35r6qwh3fjc7yaaq',
          'id': 'aaaacw4qve35r6qwh3fjc7yaaq',
          'name': 'id'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35r6qwh3fjc7yaau',
          'id': 'aaaacw4qve35r6qwh3fjc7yaau',
          'name': 'name'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35r6qwh3fjc7yaay',
          'id': 'aaaacw4qve35r6qwh3fjc7yaay',
          'name': 'active'
        }
      ],
      'isAbstract': false,
      'extends': {
        '_href': '/api/v2/sys_md_EntityType/sys_sec_authority',
        'id': 'sys_sec_authority',
        'label': 'Authority'
      },
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_ont_SortaJobExecution',
      'id': 'sys_ont_SortaJobExecution',
      'label': 'SORTA job execution',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_ont',
        'id': 'sys_ont',
        'label': 'Ontology'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34r6qwh3fjc7yabe',
          'id': 'aaaacw4qve34r6qwh3fjc7yabe',
          'name': 'name'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34r6qwh3fjc7yabi',
          'id': 'aaaacw4qve34r6qwh3fjc7yabi',
          'name': 'resultEntity'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34t6qwh3fjc7yaae',
          'id': 'aaaacw4qve34t6qwh3fjc7yaae',
          'name': 'sourceEntity'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34t6qwh3fjc7yaai',
          'id': 'aaaacw4qve34t6qwh3fjc7yaai',
          'name': 'ontologyIri'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34t6qwh3fjc7yaam',
          'id': 'aaaacw4qve34t6qwh3fjc7yaam',
          'name': 'deleteUrl'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34t6qwh3fjc7yaaq',
          'id': 'aaaacw4qve34t6qwh3fjc7yaaq',
          'name': 'Threshold'
        }
      ],
      'isAbstract': false,
      'extends': {
        '_href': '/api/v2/sys_md_EntityType/sys_JobExecution',
        'id': 'sys_JobExecution',
        'label': 'Job execution'
      },
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_set_OMIM',
      'id': 'sys_set_OMIM',
      'label': 'OMIM annotator settings',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_set',
        'id': 'sys_set',
        'label': 'Settings'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34t6qwh3fjc7yabi',
          'id': 'aaaacw4qve34t6qwh3fjc7yabi',
          'name': 'omimLocation'
        }
      ],
      'isAbstract': false,
      'extends': {
        '_href': '/api/v2/sys_md_EntityType/sys_set_settings',
        'id': 'sys_set_settings',
        'label': 'Settings'
      },
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_scr_Script',
      'id': 'sys_scr_Script',
      'label': 'Script',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_scr',
        'id': 'sys_scr',
        'label': 'Script'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3336qwh3fjc7yaaq',
          'id': 'aaaacw4qve3336qwh3fjc7yaaq',
          'name': 'name'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3336qwh3fjc7yaau',
          'id': 'aaaacw4qve3336qwh3fjc7yaau',
          'name': 'type'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3336qwh3fjc7yaay',
          'id': 'aaaacw4qve3336qwh3fjc7yaay',
          'name': 'content'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3336qwh3fjc7yaa4',
          'id': 'aaaacw4qve3336qwh3fjc7yaa4',
          'name': 'generateToken'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3336qwh3fjc7yaba',
          'id': 'aaaacw4qve3336qwh3fjc7yaba',
          'name': 'resultFileExtension'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3336qwh3fjc7yabe',
          'id': 'aaaacw4qve3336qwh3fjc7yabe',
          'name': 'parameters'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_set_cadd',
      'id': 'sys_set_cadd',
      'label': 'Cadd annotator settings',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_set',
        'id': 'sys_set',
        'label': 'Settings'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3356qwh3fjc7yaay',
          'id': 'aaaacw4qve3356qwh3fjc7yaay',
          'name': 'caddLocation'
        }
      ],
      'isAbstract': false,
      'extends': {
        '_href': '/api/v2/sys_md_EntityType/sys_set_settings',
        'id': 'sys_set_settings',
        'label': 'Settings'
      },
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_set_snpEff',
      'id': 'sys_set_snpEff',
      'label': 'SnpEff annotator settings',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_set',
        'id': 'sys_set',
        'label': 'Settings'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve33z6qwh3fjc7yaae',
          'id': 'aaaacw4qve33z6qwh3fjc7yaae',
          'name': 'snpEffJarLocation'
        }
      ],
      'isAbstract': false,
      'extends': {
        '_href': '/api/v2/sys_md_EntityType/sys_set_settings',
        'id': 'sys_set_settings',
        'label': 'Settings'
      },
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_map_EntityMapping',
      'id': 'sys_map_EntityMapping',
      'label': 'Entity mapping',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_map',
        'id': 'sys_map',
        'label': 'Mapper'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34p6qwh3fjc7yaba',
          'id': 'aaaacw4qve34p6qwh3fjc7yaba',
          'name': 'identifier'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34r6qwh3fjc7yaae',
          'id': 'aaaacw4qve34r6qwh3fjc7yaae',
          'name': 'sourceEntityType'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34r6qwh3fjc7yaai',
          'id': 'aaaacw4qve34r6qwh3fjc7yaai',
          'name': 'targetEntityType'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34r6qwh3fjc7yaam',
          'id': 'aaaacw4qve34r6qwh3fjc7yaam',
          'name': 'attributeMappings'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_mail_JavaMailProperty',
      'id': 'sys_mail_JavaMailProperty',
      'label': 'Mail sender properties.',
      'description': 'See https://javamail.java.net/nonav/docs/api/ for a description of the properties you can use.',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_mail',
        'id': 'sys_mail',
        'label': 'Mail'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3456qwh3fjc7yaai',
          'id': 'aaaacw4qve3456qwh3fjc7yaai',
          'name': 'mailSettings'
        }
      ],
      'isAbstract': false,
      'extends': {
        '_href': '/api/v2/sys_md_EntityType/sys_md_Property',
        'id': 'sys_md_Property',
        'label': 'Property'
      },
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_sec_GroupAuthority',
      'id': 'sys_sec_GroupAuthority',
      'label': 'Group authority',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_sec',
        'id': 'sys_sec',
        'label': 'Security'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35r6qwh3fjc7yaai',
          'id': 'aaaacw4qve35r6qwh3fjc7yaai',
          'name': 'id'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35r6qwh3fjc7yaam',
          'id': 'aaaacw4qve35r6qwh3fjc7yaam',
          'name': 'Group'
        }
      ],
      'isAbstract': false,
      'extends': {
        '_href': '/api/v2/sys_md_EntityType/sys_sec_authority',
        'id': 'sys_sec_authority',
        'label': 'Authority'
      },
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_map_MappingTarget',
      'id': 'sys_map_MappingTarget',
      'label': 'Mapping target',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_map',
        'id': 'sys_map',
        'label': 'Mapper'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34t6qwh3fjc7yaa4',
          'id': 'aaaacw4qve34t6qwh3fjc7yaa4',
          'name': 'identifier'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34t6qwh3fjc7yaba',
          'id': 'aaaacw4qve34t6qwh3fjc7yaba',
          'name': 'entityMappings'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34t6qwh3fjc7yabe',
          'id': 'aaaacw4qve34t6qwh3fjc7yabe',
          'name': 'target'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_sec_GroupMember',
      'id': 'sys_sec_GroupMember',
      'label': 'Group member',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_sec',
        'id': 'sys_sec',
        'label': 'Security'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34p6qwh3fjc7yaae',
          'id': 'aaaacw4qve34p6qwh3fjc7yaae',
          'name': 'id'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34p6qwh3fjc7yaai',
          'id': 'aaaacw4qve34p6qwh3fjc7yaai',
          'name': 'User'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34p6qwh3fjc7yaam',
          'id': 'aaaacw4qve34p6qwh3fjc7yaam',
          'name': 'Group'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_App',
      'id': 'sys_App',
      'label': 'App',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys',
        'id': 'sys',
        'label': 'System'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3336qwh3fjc7yabi',
          'id': 'aaaacw4qve3336qwh3fjc7yabi',
          'name': 'id'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3336qwh3fjc7yabm',
          'id': 'aaaacw4qve3336qwh3fjc7yabm',
          'name': 'name'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3336qwh3fjc7yabq',
          'id': 'aaaacw4qve3336qwh3fjc7yabq',
          'name': 'description'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3356qwh3fjc7yaae',
          'id': 'aaaacw4qve3356qwh3fjc7yaae',
          'name': 'iconHref'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3356qwh3fjc7yaai',
          'id': 'aaaacw4qve3356qwh3fjc7yaai',
          'name': 'resourceZip'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3356qwh3fjc7yaam',
          'id': 'aaaacw4qve3356qwh3fjc7yaam',
          'name': 'isActive'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3356qwh3fjc7yaaq',
          'id': 'aaaacw4qve3356qwh3fjc7yaaq',
          'name': 'landingPageHtmlTemplate'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_map_MappingProject',
      'id': 'sys_map_MappingProject',
      'label': 'Mapping project',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_map',
        'id': 'sys_map',
        'label': 'Mapper'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve33t6qwh3fjc7yaae',
          'id': 'aaaacw4qve33t6qwh3fjc7yaae',
          'name': 'identifier'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve33t6qwh3fjc7yaai',
          'id': 'aaaacw4qve33t6qwh3fjc7yaai',
          'name': 'name'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve33t6qwh3fjc7yaam',
          'id': 'aaaacw4qve33t6qwh3fjc7yaam',
          'name': 'owner'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve33t6qwh3fjc7yaaq',
          'id': 'aaaacw4qve33t6qwh3fjc7yaaq',
          'name': 'mappingtargets'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_set_directory',
      'id': 'sys_set_directory',
      'label': 'Directory settings',
      'description': 'Settings for the Directory - Negotiator interaction.',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_set',
        'id': 'sys_set',
        'label': 'Settings'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34n6qwh3fjc7yaam',
          'id': 'aaaacw4qve34n6qwh3fjc7yaam',
          'name': 'negotiator_url'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34n6qwh3fjc7yaaq',
          'id': 'aaaacw4qve34n6qwh3fjc7yaaq',
          'name': 'username'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34n6qwh3fjc7yaau',
          'id': 'aaaacw4qve34n6qwh3fjc7yaau',
          'name': 'password'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve34n6qwh3fjc7yaay',
          'id': 'aaaacw4qve34n6qwh3fjc7yaay',
          'name': 'collection_entity'
        }
      ],
      'isAbstract': false,
      'extends': {
        '_href': '/api/v2/sys_md_EntityType/sys_set_settings',
        'id': 'sys_set_settings',
        'label': 'Settings'
      },
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_FileIngest',
      'id': 'sys_FileIngest',
      'label': 'File ingest',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys',
        'id': 'sys',
        'label': 'System'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3376qwh3fjc7yaae',
          'id': 'aaaacw4qve3376qwh3fjc7yaae',
          'name': 'id'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3376qwh3fjc7yaai',
          'id': 'aaaacw4qve3376qwh3fjc7yaai',
          'name': 'name'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3376qwh3fjc7yaam',
          'id': 'aaaacw4qve3376qwh3fjc7yaam',
          'name': 'description'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3376qwh3fjc7yaaq',
          'id': 'aaaacw4qve3376qwh3fjc7yaaq',
          'name': 'url'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3376qwh3fjc7yaau',
          'id': 'aaaacw4qve3376qwh3fjc7yaau',
          'name': 'loader'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3376qwh3fjc7yaay',
          'id': 'aaaacw4qve3376qwh3fjc7yaay',
          'name': 'entityType'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3376qwh3fjc7yaa4',
          'id': 'aaaacw4qve3376qwh3fjc7yaa4',
          'name': 'cronexpression'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3376qwh3fjc7yaba',
          'id': 'aaaacw4qve3376qwh3fjc7yaba',
          'name': 'active'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3376qwh3fjc7yabe',
          'id': 'aaaacw4qve3376qwh3fjc7yabe',
          'name': 'failureEmail'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_FileIngestJobExecution',
      'id': 'sys_FileIngestJobExecution',
      'label': 'File ingest job execution',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys',
        'id': 'sys',
        'label': 'System'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3336qwh3fjc7yaai',
          'id': 'aaaacw4qve3336qwh3fjc7yaai',
          'name': 'file'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3336qwh3fjc7yaam',
          'id': 'aaaacw4qve3336qwh3fjc7yaam',
          'name': 'fileIngest'
        }
      ],
      'isAbstract': false,
      'extends': {
        '_href': '/api/v2/sys_md_EntityType/sys_JobExecution',
        'id': 'sys_JobExecution',
        'label': 'Job execution'
      },
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_md_Package',
      'id': 'sys_md_Package',
      'label': 'Package',
      'description': 'Grouping of related entities',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_md',
        'id': 'sys_md',
        'label': 'Meta'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35v6qwh3fjc7yabe',
          'id': 'aaaacw4qve35v6qwh3fjc7yabe',
          'name': 'id'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35v6qwh3fjc7yabi',
          'id': 'aaaacw4qve35v6qwh3fjc7yabi',
          'name': 'label'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35v6qwh3fjc7yabm',
          'id': 'aaaacw4qve35v6qwh3fjc7yabm',
          'name': 'description'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35v6qwh3fjc7yabq',
          'id': 'aaaacw4qve35v6qwh3fjc7yabq',
          'name': 'parent'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35v6qwh3fjc7yabu',
          'id': 'aaaacw4qve35v6qwh3fjc7yabu',
          'name': 'children'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35x6qwh3fjc7yaae',
          'id': 'aaaacw4qve35x6qwh3fjc7yaae',
          'name': 'entityTypes'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35x6qwh3fjc7yaai',
          'id': 'aaaacw4qve35x6qwh3fjc7yaai',
          'name': 'tags'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_set_MailSettings',
      'id': 'sys_set_MailSettings',
      'label': 'Mail settings',
      'description': 'Configuration properties for email support. Will be used to send email from Molgenis. See also the MailSenderProp entity.',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_set',
        'id': 'sys_set',
        'label': 'Settings'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35t6qwh3fjc7yaae',
          'id': 'aaaacw4qve35t6qwh3fjc7yaae',
          'name': 'host'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35t6qwh3fjc7yaai',
          'id': 'aaaacw4qve35t6qwh3fjc7yaai',
          'name': 'port'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35t6qwh3fjc7yaam',
          'id': 'aaaacw4qve35t6qwh3fjc7yaam',
          'name': 'protocol'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35t6qwh3fjc7yaaq',
          'id': 'aaaacw4qve35t6qwh3fjc7yaaq',
          'name': 'username'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35t6qwh3fjc7yaau',
          'id': 'aaaacw4qve35t6qwh3fjc7yaau',
          'name': 'password'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35t6qwh3fjc7yaay',
          'id': 'aaaacw4qve35t6qwh3fjc7yaay',
          'name': 'defaultEncoding'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35t6qwh3fjc7yaa4',
          'id': 'aaaacw4qve35t6qwh3fjc7yaa4',
          'name': 'props'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35t6qwh3fjc7yaba',
          'id': 'aaaacw4qve35t6qwh3fjc7yaba',
          'name': 'testConnection'
        }
      ],
      'isAbstract': false,
      'extends': {
        '_href': '/api/v2/sys_md_EntityType/sys_set_settings',
        'id': 'sys_set_settings',
        'label': 'Settings'
      },
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_md_EntityType',
      'id': 'sys_md_EntityType',
      'label': 'Entity type',
      'description': 'Meta data for entity classes',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_md',
        'id': 'sys_md',
        'label': 'Meta'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35t6qwh3fjc7yabm',
          'id': 'aaaacw4qve35t6qwh3fjc7yabm',
          'name': 'id'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35v6qwh3fjc7yaae',
          'id': 'aaaacw4qve35v6qwh3fjc7yaae',
          'name': 'label'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35v6qwh3fjc7yaai',
          'id': 'aaaacw4qve35v6qwh3fjc7yaai',
          'name': 'description'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35v6qwh3fjc7yaam',
          'id': 'aaaacw4qve35v6qwh3fjc7yaam',
          'name': 'package'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35v6qwh3fjc7yaaq',
          'id': 'aaaacw4qve35v6qwh3fjc7yaaq',
          'name': 'attributes'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35v6qwh3fjc7yaau',
          'id': 'aaaacw4qve35v6qwh3fjc7yaau',
          'name': 'isAbstract'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35v6qwh3fjc7yaay',
          'id': 'aaaacw4qve35v6qwh3fjc7yaay',
          'name': 'extends'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35v6qwh3fjc7yaa4',
          'id': 'aaaacw4qve35v6qwh3fjc7yaa4',
          'name': 'tags'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35v6qwh3fjc7yaba',
          'id': 'aaaacw4qve35v6qwh3fjc7yaba',
          'name': 'backend'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3536qwh3fjc7yaae',
          'id': 'aaaacw4qve3536qwh3fjc7yaae',
          'name': 'labelEn'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3536qwh3fjc7yaai',
          'id': 'aaaacw4qve3536qwh3fjc7yaai',
          'name': 'descriptionEn'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3536qwh3fjc7yaay',
          'id': 'aaaacw4qve3536qwh3fjc7yaay',
          'name': 'labelNl'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3556qwh3fjc7yaae',
          'id': 'aaaacw4qve3556qwh3fjc7yaae',
          'name': 'descriptionNl'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3556qwh3fjc7yaau',
          'id': 'aaaacw4qve3556qwh3fjc7yaau',
          'name': 'labelDe'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3556qwh3fjc7yaay',
          'id': 'aaaacw4qve3556qwh3fjc7yaay',
          'name': 'descriptionDe'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3576qwh3fjc7yaae',
          'id': 'aaaacw4qve3576qwh3fjc7yaae',
          'name': 'labelEs'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3576qwh3fjc7yaai',
          'id': 'aaaacw4qve3576qwh3fjc7yaai',
          'name': 'descriptionEs'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3576qwh3fjc7yaay',
          'id': 'aaaacw4qve3576qwh3fjc7yaay',
          'name': 'labelIt'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3576qwh3fjc7yaa4',
          'id': 'aaaacw4qve3576qwh3fjc7yaa4',
          'name': 'descriptionIt'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve36b6qwh3fjc7yaai',
          'id': 'aaaacw4qve36b6qwh3fjc7yaai',
          'name': 'labelPt'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve36b6qwh3fjc7yaam',
          'id': 'aaaacw4qve36b6qwh3fjc7yaam',
          'name': 'descriptionPt'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve36b6qwh3fjc7yaa4',
          'id': 'aaaacw4qve36b6qwh3fjc7yaa4',
          'name': 'labelFr'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve36b6qwh3fjc7yaba',
          'id': 'aaaacw4qve36b6qwh3fjc7yaba',
          'name': 'descriptionFr'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve36l6qwh3fjc7yaai',
          'id': 'aaaacw4qve36l6qwh3fjc7yaai',
          'name': 'labelXx'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve36l6qwh3fjc7yaam',
          'id': 'aaaacw4qve36l6qwh3fjc7yaam',
          'name': 'descriptionXx'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/sys_md_Attribute',
      'id': 'sys_md_Attribute',
      'label': 'Attribute',
      'description': 'Meta data for attributes',
      'package': {
        '_href': '/api/v2/sys_md_Package/sys_md',
        'id': 'sys_md',
        'label': 'Meta'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3456qwh3fjc7yaam',
          'id': 'aaaacw4qve3456qwh3fjc7yaam',
          'name': 'id'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3456qwh3fjc7yaaq',
          'id': 'aaaacw4qve3456qwh3fjc7yaaq',
          'name': 'name'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3456qwh3fjc7yaau',
          'id': 'aaaacw4qve3456qwh3fjc7yaau',
          'name': 'entity'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3456qwh3fjc7yaay',
          'id': 'aaaacw4qve3456qwh3fjc7yaay',
          'name': 'sequenceNr'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3456qwh3fjc7yaa4',
          'id': 'aaaacw4qve3456qwh3fjc7yaa4',
          'name': 'type'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3456qwh3fjc7yaba',
          'id': 'aaaacw4qve3456qwh3fjc7yaba',
          'name': 'isIdAttribute'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3456qwh3fjc7yabe',
          'id': 'aaaacw4qve3456qwh3fjc7yabe',
          'name': 'isLabelAttribute'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3456qwh3fjc7yabi',
          'id': 'aaaacw4qve3456qwh3fjc7yabi',
          'name': 'lookupAttributeIndex'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3456qwh3fjc7yabm',
          'id': 'aaaacw4qve3456qwh3fjc7yabm',
          'name': 'parent'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3456qwh3fjc7yabq',
          'id': 'aaaacw4qve3456qwh3fjc7yabq',
          'name': 'children'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3456qwh3fjc7yabu',
          'id': 'aaaacw4qve3456qwh3fjc7yabu',
          'name': 'refEntityType'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3476qwh3fjc7yaae',
          'id': 'aaaacw4qve3476qwh3fjc7yaae',
          'name': 'isCascadeDelete'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3476qwh3fjc7yaai',
          'id': 'aaaacw4qve3476qwh3fjc7yaai',
          'name': 'mappedBy'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3476qwh3fjc7yaam',
          'id': 'aaaacw4qve3476qwh3fjc7yaam',
          'name': 'orderBy'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3476qwh3fjc7yaaq',
          'id': 'aaaacw4qve3476qwh3fjc7yaaq',
          'name': 'expression'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3476qwh3fjc7yaau',
          'id': 'aaaacw4qve3476qwh3fjc7yaau',
          'name': 'isNullable'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3476qwh3fjc7yaay',
          'id': 'aaaacw4qve3476qwh3fjc7yaay',
          'name': 'isAuto'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3476qwh3fjc7yaa4',
          'id': 'aaaacw4qve3476qwh3fjc7yaa4',
          'name': 'isVisible'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3476qwh3fjc7yaba',
          'id': 'aaaacw4qve3476qwh3fjc7yaba',
          'name': 'label'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3476qwh3fjc7yabe',
          'id': 'aaaacw4qve3476qwh3fjc7yabe',
          'name': 'description'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3476qwh3fjc7yabi',
          'id': 'aaaacw4qve3476qwh3fjc7yabi',
          'name': 'isAggregatable'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35b6qwh3fjc7yaae',
          'id': 'aaaacw4qve35b6qwh3fjc7yaae',
          'name': 'enumOptions'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35b6qwh3fjc7yaai',
          'id': 'aaaacw4qve35b6qwh3fjc7yaai',
          'name': 'rangeMin'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35b6qwh3fjc7yaam',
          'id': 'aaaacw4qve35b6qwh3fjc7yaam',
          'name': 'rangeMax'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35b6qwh3fjc7yaaq',
          'id': 'aaaacw4qve35b6qwh3fjc7yaaq',
          'name': 'isReadOnly'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35b6qwh3fjc7yaau',
          'id': 'aaaacw4qve35b6qwh3fjc7yaau',
          'name': 'isUnique'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35b6qwh3fjc7yaay',
          'id': 'aaaacw4qve35b6qwh3fjc7yaay',
          'name': 'tags'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35b6qwh3fjc7yaa4',
          'id': 'aaaacw4qve35b6qwh3fjc7yaa4',
          'name': 'visibleExpression'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35b6qwh3fjc7yaba',
          'id': 'aaaacw4qve35b6qwh3fjc7yaba',
          'name': 'validationExpression'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve35d6qwh3fjc7yaae',
          'id': 'aaaacw4qve35d6qwh3fjc7yaae',
          'name': 'defaultValue'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3536qwh3fjc7yaam',
          'id': 'aaaacw4qve3536qwh3fjc7yaam',
          'name': 'labelEn'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3536qwh3fjc7yaaq',
          'id': 'aaaacw4qve3536qwh3fjc7yaaq',
          'name': 'descriptionEn'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3556qwh3fjc7yaai',
          'id': 'aaaacw4qve3556qwh3fjc7yaai',
          'name': 'labelNl'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3556qwh3fjc7yaam',
          'id': 'aaaacw4qve3556qwh3fjc7yaam',
          'name': 'descriptionNl'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3556qwh3fjc7yaa4',
          'id': 'aaaacw4qve3556qwh3fjc7yaa4',
          'name': 'labelDe'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3556qwh3fjc7yaba',
          'id': 'aaaacw4qve3556qwh3fjc7yaba',
          'name': 'descriptionDe'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3576qwh3fjc7yaam',
          'id': 'aaaacw4qve3576qwh3fjc7yaam',
          'name': 'labelEs'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3576qwh3fjc7yaaq',
          'id': 'aaaacw4qve3576qwh3fjc7yaaq',
          'name': 'descriptionEs'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3576qwh3fjc7yaba',
          'id': 'aaaacw4qve3576qwh3fjc7yaba',
          'name': 'labelIt'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve3576qwh3fjc7yabe',
          'id': 'aaaacw4qve3576qwh3fjc7yabe',
          'name': 'descriptionIt'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve36b6qwh3fjc7yaaq',
          'id': 'aaaacw4qve36b6qwh3fjc7yaaq',
          'name': 'labelPt'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve36b6qwh3fjc7yaau',
          'id': 'aaaacw4qve36b6qwh3fjc7yaau',
          'name': 'descriptionPt'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve36d6qwh3fjc7yaae',
          'id': 'aaaacw4qve36d6qwh3fjc7yaae',
          'name': 'labelFr'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve36d6qwh3fjc7yaai',
          'id': 'aaaacw4qve36d6qwh3fjc7yaai',
          'name': 'descriptionFr'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve36l6qwh3fjc7yaaq',
          'id': 'aaaacw4qve36l6qwh3fjc7yaaq',
          'name': 'labelXx'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw4qve36n6qwh3fjc7yaae',
          'id': 'aaaacw4qve36n6qwh3fjc7yaae',
          'name': 'descriptionXx'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/root_hospital_departments',
      'id': 'root_hospital_departments',
      'label': 'Departments',
      'description': 'departments is hospital specific, so placed in the hospital package',
      'package': {
        '_href': '/api/v2/sys_md_Package/root_hospital',
        'id': 'root_hospital',
        'label': 'root_hospital'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmaz6qwh3fjc7yaau',
          'id': 'aaaacw5jnfmaz6qwh3fjc7yaau',
          'name': 'id'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmaz6qwh3fjc7yaay',
          'id': 'aaaacw5jnfmaz6qwh3fjc7yaay',
          'name': 'label'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/root_hospital_functions',
      'id': 'root_hospital_functions',
      'label': 'Functions',
      'description': 'functions are hospital specific, so placed in the hospital package',
      'package': {
        '_href': '/api/v2/sys_md_Package/root_hospital',
        'id': 'root_hospital',
        'label': 'root_hospital'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmaz6qwh3fjc7yaa4',
          'id': 'aaaacw5jnfmaz6qwh3fjc7yaa4',
          'name': 'id'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmaz6qwh3fjc7yaba',
          'id': 'aaaacw5jnfmaz6qwh3fjc7yaba',
          'name': 'label'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/root_hospital_diagnosis',
      'id': 'root_hospital_diagnosis',
      'label': 'Diagnosis',
      'description': 'diagnosis is hospital specific, so placed in the hospital package',
      'package': {
        '_href': '/api/v2/sys_md_Package/root_hospital',
        'id': 'root_hospital',
        'label': 'root_hospital'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmax6qwh3fjc7yabm',
          'id': 'aaaacw5jnfmax6qwh3fjc7yabm',
          'name': 'id'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmax6qwh3fjc7yabq',
          'id': 'aaaacw5jnfmax6qwh3fjc7yabq',
          'name': 'disease'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmax6qwh3fjc7yabu',
          'id': 'aaaacw5jnfmax6qwh3fjc7yabu',
          'name': 'ontology'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/root_hospital_sample_types',
      'id': 'root_hospital_sample_types',
      'label': 'Sample types',
      'description': 'sample types are hospital specific, so placed in the hospital package',
      'package': {
        '_href': '/api/v2/sys_md_Package/root_hospital',
        'id': 'root_hospital',
        'label': 'root_hospital'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmaz6qwh3fjc7yabe',
          'id': 'aaaacw5jnfmaz6qwh3fjc7yabe',
          'name': 'id'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmaz6qwh3fjc7yabi',
          'id': 'aaaacw5jnfmaz6qwh3fjc7yabi',
          'name': 'label'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/root_hospital_users',
      'id': 'root_hospital_users',
      'label': 'Users',
      'description': 'users are hospital specific, so placed in the root_hospital package',
      'package': {
        '_href': '/api/v2/sys_md_Package/root_hospital',
        'id': 'root_hospital',
        'label': 'root_hospital'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmax6qwh3fjc7yaam',
          'id': 'aaaacw5jnfmax6qwh3fjc7yaam',
          'name': 'displayName'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmax6qwh3fjc7yaaq',
          'id': 'aaaacw5jnfmax6qwh3fjc7yaaq',
          'name': 'userName'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmax6qwh3fjc7yaau',
          'id': 'aaaacw5jnfmax6qwh3fjc7yaau',
          'name': 'active'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmax6qwh3fjc7yaay',
          'id': 'aaaacw5jnfmax6qwh3fjc7yaay',
          'name': 'role'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmax6qwh3fjc7yaa4',
          'id': 'aaaacw5jnfmax6qwh3fjc7yaa4',
          'name': 'title'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmax6qwh3fjc7yaba',
          'id': 'aaaacw5jnfmax6qwh3fjc7yaba',
          'name': 'e_mail'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/root_hospital_cities',
      'id': 'root_hospital_cities',
      'label': 'Cities',
      'description': 'list of cities, located in package root, so other companies can use the same "root" package and use the same entities',
      'package': {
        '_href': '/api/v2/sys_md_Package/root_hospital',
        'id': 'root_hospital',
        'label': 'root_hospital'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmar6qwh3fjc7yabq',
          'id': 'aaaacw5jnfmar6qwh3fjc7yabq',
          'name': 'cityName'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmar6qwh3fjc7yabu',
          'id': 'aaaacw5jnfmar6qwh3fjc7yabu',
          'name': 'lat'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmav6qwh3fjc7yaae',
          'id': 'aaaacw5jnfmav6qwh3fjc7yaae',
          'name': 'lng'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmax6qwh3fjc7yaae',
          'id': 'aaaacw5jnfmax6qwh3fjc7yaae',
          'name': 'label'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmax6qwh3fjc7yaai',
          'id': 'aaaacw5jnfmax6qwh3fjc7yaai',
          'name': 'country'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/root_hospital_gender',
      'id': 'root_hospital_gender',
      'label': 'Gender',
      'description': 'gender is located in the root package because it is not hospital specific',
      'package': {
        '_href': '/api/v2/sys_md_Package/root_hospital',
        'id': 'root_hospital',
        'label': 'root_hospital'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmax6qwh3fjc7yabe',
          'id': 'aaaacw5jnfmax6qwh3fjc7yabe',
          'name': 'id'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmax6qwh3fjc7yabi',
          'id': 'aaaacw5jnfmax6qwh3fjc7yabi',
          'name': 'label'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/root_hospital_persons',
      'id': 'root_hospital_persons',
      'label': 'Persons',
      'description': 'person defines general attributes like firstName, lastName, that has can be filled in for each person in general, it is an abstract entity, so it cannot be initiated by itself and always has to be inherited by another entity',
      'package': {
        '_href': '/api/v2/sys_md_Package/root_hospital',
        'id': 'root_hospital',
        'label': 'root_hospital'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmax6qwh3fjc7yaby',
          'id': 'aaaacw5jnfmax6qwh3fjc7yaby',
          'name': 'firstName'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmax6qwh3fjc7yab4',
          'id': 'aaaacw5jnfmax6qwh3fjc7yab4',
          'name': 'lastName'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmax6qwh3fjc7yaca',
          'id': 'aaaacw5jnfmax6qwh3fjc7yaca',
          'name': 'birthdate'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmax6qwh3fjc7yace',
          'id': 'aaaacw5jnfmax6qwh3fjc7yace',
          'name': 'birthplace'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmax6qwh3fjc7yaci',
          'id': 'aaaacw5jnfmax6qwh3fjc7yaci',
          'name': 'gender'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmax6qwh3fjc7yacm',
          'id': 'aaaacw5jnfmax6qwh3fjc7yacm',
          'name': 'contact'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmax6qwh3fjc7yacq',
          'id': 'aaaacw5jnfmax6qwh3fjc7yacq',
          'name': 'adress'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmax6qwh3fjc7yacu',
          'id': 'aaaacw5jnfmax6qwh3fjc7yacu',
          'name': 'zip_code'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmax6qwh3fjc7yacy',
          'id': 'aaaacw5jnfmax6qwh3fjc7yacy',
          'name': 'tel_nr'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmax6qwh3fjc7yac4',
          'id': 'aaaacw5jnfmax6qwh3fjc7yac4',
          'name': 'residence'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmax6qwh3fjc7yada',
          'id': 'aaaacw5jnfmax6qwh3fjc7yada',
          'name': 'user'
        }
      ],
      'isAbstract': true,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/root_hospital_lab_results',
      'id': 'root_hospital_lab_results',
      'label': 'Lab results',
      'description': 'lab results are hospital specific, so placed in the hospital package',
      'package': {
        '_href': '/api/v2/sys_md_Package/root_hospital',
        'id': 'root_hospital',
        'label': 'root_hospital'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmaz6qwh3fjc7yabm',
          'id': 'aaaacw5jnfmaz6qwh3fjc7yabm',
          'name': 'id'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmaz6qwh3fjc7yabq',
          'id': 'aaaacw5jnfmaz6qwh3fjc7yabq',
          'name': 'sample_type'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmaz6qwh3fjc7yabu',
          'id': 'aaaacw5jnfmaz6qwh3fjc7yabu',
          'name': 'ESR'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmaz6qwh3fjc7yaby',
          'id': 'aaaacw5jnfmaz6qwh3fjc7yaby',
          'name': 'HB'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmaz6qwh3fjc7yab4',
          'id': 'aaaacw5jnfmaz6qwh3fjc7yab4',
          'name': 'hematocrit'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmaz6qwh3fjc7yaca',
          'id': 'aaaacw5jnfmaz6qwh3fjc7yaca',
          'name': 'iron'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmaz6qwh3fjc7yace',
          'id': 'aaaacw5jnfmaz6qwh3fjc7yace',
          'name': 'PSA'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmaz6qwh3fjc7yaci',
          'id': 'aaaacw5jnfmaz6qwh3fjc7yaci',
          'name': 'proteins'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmaz6qwh3fjc7yacm',
          'id': 'aaaacw5jnfmaz6qwh3fjc7yacm',
          'name': 'proteins_serum'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmaz6qwh3fjc7yacq',
          'id': 'aaaacw5jnfmaz6qwh3fjc7yacq',
          'name': 'proteins_plasma'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmaz6qwh3fjc7yacu',
          'id': 'aaaacw5jnfmaz6qwh3fjc7yacu',
          'name': 'thyroid'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmaz6qwh3fjc7yacy',
          'id': 'aaaacw5jnfmaz6qwh3fjc7yacy',
          'name': 'TSH'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmaz6qwh3fjc7yac4',
          'id': 'aaaacw5jnfmaz6qwh3fjc7yac4',
          'name': 'FT4'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmaz6qwh3fjc7yada',
          'id': 'aaaacw5jnfmaz6qwh3fjc7yada',
          'name': 'cholesterol'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/root_hospital_patients',
      'id': 'root_hospital_patients',
      'label': 'Patients',
      'description': 'patients extends persons, meaning it \'inherits\' attribute definition',
      'package': {
        '_href': '/api/v2/sys_md_Package/root_hospital',
        'id': 'root_hospital',
        'label': 'root_hospital'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmax6qwh3fjc7yade',
          'id': 'aaaacw5jnfmax6qwh3fjc7yade',
          'name': 'patient_id'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmax6qwh3fjc7yadi',
          'id': 'aaaacw5jnfmax6qwh3fjc7yadi',
          'name': 'diagnosis'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmax6qwh3fjc7yadm',
          'id': 'aaaacw5jnfmax6qwh3fjc7yadm',
          'name': 'lab_results'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmax6qwh3fjc7yadq',
          'id': 'aaaacw5jnfmax6qwh3fjc7yadq',
          'name': 'children'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmax6qwh3fjc7yadu',
          'id': 'aaaacw5jnfmax6qwh3fjc7yadu',
          'name': 'date_of_death'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmaz6qwh3fjc7yaae',
          'id': 'aaaacw5jnfmaz6qwh3fjc7yaae',
          'name': 'lastUpdated'
        }
      ],
      'isAbstract': false,
      'extends': {
        '_href': '/api/v2/sys_md_EntityType/root_hospital_persons',
        'id': 'root_hospital_persons',
        'label': 'Persons'
      },
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/root_hospital_employees',
      'id': 'root_hospital_employees',
      'label': 'Employees',
      'description': 'employees extends persons, meaning it \'inherits\' attribute definition',
      'package': {
        '_href': '/api/v2/sys_md_Package/root_hospital',
        'id': 'root_hospital',
        'label': 'root_hospital'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmaz6qwh3fjc7yaai',
          'id': 'aaaacw5jnfmaz6qwh3fjc7yaai',
          'name': 'employee_id'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmaz6qwh3fjc7yaam',
          'id': 'aaaacw5jnfmaz6qwh3fjc7yaam',
          'name': 'function_description'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw5jnfmaz6qwh3fjc7yaaq',
          'id': 'aaaacw5jnfmaz6qwh3fjc7yaaq',
          'name': 'department'
        }
      ],
      'isAbstract': false,
      'extends': {
        '_href': '/api/v2/sys_md_EntityType/root_hospital_persons',
        'id': 'root_hospital_persons',
        'label': 'Persons'
      },
      'tags': [],
      'backend': 'PostgreSQL'
    },
    {
      '_href': '/api/v2/sys_md_EntityType/base_city',
      'id': 'base_city',
      'label': 'city',
      'package': {
        '_href': '/api/v2/sys_md_Package/base',
        'id': 'base',
        'label': 'Default'
      },
      'attributes': [
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw7iihiw56qwh3fjc7yaae',
          'id': 'aaaacw7iihiw56qwh3fjc7yaae',
          'name': 'id'
        },
        {
          '_href': '/api/v2/sys_md_Attribute/aaaacw7iihiw56qwh3fjc7yaai',
          'id': 'aaaacw7iihiw56qwh3fjc7yaai',
          'name': 'name'
        }
      ],
      'isAbstract': false,
      'tags': [],
      'backend': 'PostgreSQL'
    }
  ]
}
