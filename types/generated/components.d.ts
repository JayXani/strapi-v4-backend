import type { Schema, Attribute } from '@strapi/strapi';

export interface MenuMenuLink extends Schema.Component {
  collectionName: 'components_menu_menu_links';
  info: {
    displayName: 'menu_link';
    icon: 'attachment';
  };
  attributes: {
    link_text: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    open_in_new_tab: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface MenuMenu extends Schema.Component {
  collectionName: 'components_menu_menus';
  info: {
    displayName: 'Menu';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    logo_link: Attribute.Text & Attribute.Required;
    logo_text: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 10;
        maxLength: 255;
      }>;
    logo: Attribute.Media;
    menu_links: Attribute.Component<'menu.menu-link', true>;
  };
}

export interface SectionImageGrid extends Schema.Component {
  collectionName: 'components_section_image_grids';
  info: {
    displayName: 'image-grid';
    icon: 'picture';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
  };
}

export interface SectionSectionContent extends Schema.Component {
  collectionName: 'components_section_section_contents';
  info: {
    displayName: 'section_content';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    content: Attribute.Blocks & Attribute.Required;
    metadata: Attribute.Component<'section.section-metadata'>;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SectionSectionGrid extends Schema.Component {
  collectionName: 'components_section_section_grids';
  info: {
    displayName: 'section_grid';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    text_grid: Attribute.Component<'section.text-grid', true>;
    image_grid: Attribute.Component<'section.image-grid', true>;
    metadata: Attribute.Component<'section.section-metadata'> &
      Attribute.Required;
  };
}

export interface SectionSectionMetadata extends Schema.Component {
  collectionName: 'components_section_section_metadata';
  info: {
    displayName: 'section_metadata';
    icon: 'database';
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 5;
        maxLength: 255;
      }>;
    section_id: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 50;
      }>;
    background: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface SectionSectionTwoColumns extends Schema.Component {
  collectionName: 'components_section_section_two_columns';
  info: {
    displayName: 'section-two-columns';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 5;
        maxLength: 255;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 5;
      }>;
    image: Attribute.Media & Attribute.Required;
    metadata: Attribute.Component<'section.section-metadata'> &
      Attribute.Required;
  };
}

export interface SectionTextGrid extends Schema.Component {
  collectionName: 'components_section_text_grids';
  info: {
    displayName: 'text-grid';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'menu.menu-link': MenuMenuLink;
      'menu.menu': MenuMenu;
      'section.image-grid': SectionImageGrid;
      'section.section-content': SectionSectionContent;
      'section.section-grid': SectionSectionGrid;
      'section.section-metadata': SectionSectionMetadata;
      'section.section-two-columns': SectionSectionTwoColumns;
      'section.text-grid': SectionTextGrid;
    }
  }
}
