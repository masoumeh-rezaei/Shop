import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Shop Backend')
    .items([
     
      S.documentTypeListItem('category').title('Categories'),
     
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && ![ 'category'].includes(item.getId()!),
      ),
    ])
