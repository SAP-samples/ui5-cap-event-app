// For Library Version: 1.90.0

declare module "sap/ui/vtm/library" {
  import Vtm from "sap/ui/vtm/Vtm";

  /**
   * Creates an instance of {@link sap.ui.vtm.Vtm} with a default set of extensions.
   *
   * The {@link sap.ui.vtm.Vtm} constructor can be used to create an instance of {@link sap.ui.vtm.Vtm} with
   * a specific set of extensions.
   */
  export function createVtm(
    /**
     * The id to pass to the {@link sap.ui.vtm.Vtm} constructor.
     */
    sId: string,
    /**
     * The settings to pass to the {@link sap.ui.vtm.Vtm} constructor. Any extensions specified in the settings
     * will be replaced with a default set.
     */
    mSettings: object
  ): Vtm;
  /**
   * @EXPERIMENTAL (since 1.0.0)
   *
   * A float[] type representing a transformation matrix in a ISO 10303-42 format (in a 1 dimensional array
   * of 13 numbers).
   *
   * The {@link sap.ui.vtm.MatrixComponent} enumeration enumerates the array indices of the matrix components
   * for this type
   */
  export type Matrix = float[];

  export namespace interfaces {
    /**
     * @SINCE 1.50
     * @EXPERIMENTAL (since 1.50.0)
     *
     * Interface for extensions which manage the display state (visibility, opacity, highlight color) of the
     * scene nodes in the VTM viewports.
     */
    interface IDisplayStateCalculationExtension {
      __implements__sap_ui_vtm_interfaces_IDisplayStateCalculationExtension: boolean;
    }

    /**
     * @SINCE 1.50
     * @EXPERIMENTAL (since 1.50.0)
     *
     * Interface for extensions which indicate progress while viewables are being downloaded.
     */
    interface IDownloadProgressExtension {
      __implements__sap_ui_vtm_interfaces_IDownloadProgressExtension: boolean;
    }

    /**
     * @SINCE 1.50
     * @EXPERIMENTAL (since 1.50.0)
     *
     * Interface for extensions which manage the initial view in the VTM viewports after loading an initial
     * set of viewables.
     */
    interface IInitialViewExtension {
      __implements__sap_ui_vtm_interfaces_IInitialViewExtension: boolean;
    }

    /**
     * @SINCE 1.50
     * @EXPERIMENTAL (since 1.50.0)
     *
     * Interface for extensions which indicate progress while viewables are being loaded.
     */
    interface ILoadProgressExtension {
      __implements__sap_ui_vtm_interfaces_ILoadProgressExtension: boolean;
    }

    /**
     * @SINCE 1.50
     * @EXPERIMENTAL (since 1.50.0)
     *
     * Interface for extensions which calculate the icon to show for each tree item in the {@link sap.ui.vtm.InternalColumnDescriptor.MessageStatus}
     * column.
     */
    interface IMessageStatusCalculationExtension {
      __implements__sap_ui_vtm_interfaces_IMessageStatusCalculationExtension: boolean;
    }

    /**
     * @SINCE 1.50
     * @EXPERIMENTAL (since 1.50.0)
     *
     * Interface for extensions which provide a behaviour when the icon in the column header for the {@link
     * sap.ui.vtm.InternalColumnDescriptor.MessageStatus} column is clicked.
     */
    interface IMessageStatusHeaderIconClickExtension {
      __implements__sap_ui_vtm_interfaces_IMessageStatusHeaderIconClickExtension: boolean;
    }

    /**
     * @SINCE 1.50
     * @EXPERIMENTAL (since 1.50.0)
     *
     * Interface for extensions which provide a behaviour when an icon in the {@link sap.ui.vtm.InternalColumnDescriptor.MessageStatus}
     * column is clicked.
     */
    interface IMessageStatusIconClickExtension {
      __implements__sap_ui_vtm_interfaces_IMessageStatusIconClickExtension: boolean;
    }

    /**
     * @SINCE 1.50
     * @EXPERIMENTAL (since 1.50.0)
     *
     * Interface for extensions which highlight the scene node that is being hovered over in a viewport.
     */
    interface ISceneNodeHoverHighlightExtension {
      __implements__sap_ui_vtm_interfaces_ISceneNodeHoverHighlightExtension: boolean;
    }

    /**
     * @SINCE 1.50
     * @EXPERIMENTAL (since 1.50.0)
     *
     * Interface for extensions which show a tooltip for the scene node that is being hovered over in a viewport.
     */
    interface ISceneNodeHoverTooltipExtension {
      __implements__sap_ui_vtm_interfaces_ISceneNodeHoverTooltipExtension: boolean;
    }

    /**
     * @SINCE 1.50
     * @EXPERIMENTAL (since 1.50.0)
     *
     * Interface for extensions which link the selections in trees across panels.
     */
    interface ISelectionLinkingExtension {
      __implements__sap_ui_vtm_interfaces_ISelectionLinkingExtension: boolean;
    }

    /**
     * @SINCE 1.50
     * @EXPERIMENTAL (since 1.50.0)
     *
     * Interface for extensions which link the views (camera positions) across VTM viewports.
     */
    interface IViewLinkingExtension {
      __implements__sap_ui_vtm_interfaces_IViewLinkingExtension: boolean;
    }

    /**
     * @SINCE 1.50
     * @EXPERIMENTAL (since 1.50.0)
     *
     * Interface for extensions which link the selection state between the tree and the viewport in each VTM
     * panel.
     */
    interface IViewportSelectionLinkingExtension {
      __implements__sap_ui_vtm_interfaces_IViewportSelectionLinkingExtension: boolean;
    }

    /**
     * @SINCE 1.50
     * @EXPERIMENTAL (since 1.50.0)
     *
     * Interface for extensions which provide a behaviour when the icon in the column header for the {@link
     * sap.ui.vtm.InternalColumnDescriptor.Visibility} column is clicked.
     */
    interface IVisibilityHeaderIconClickExtension {
      __implements__sap_ui_vtm_interfaces_IVisibilityHeaderIconClickExtension: boolean;
    }

    /**
     * @SINCE 1.50
     * @EXPERIMENTAL (since 1.50.0)
     *
     * Interface for extensions which provide a behaviour when an icon in the {@link sap.ui.vtm.InternalColumnDescriptor.Visibility}
     * column is clicked.
     */
    interface IVisibilityIconClickExtension {
      __implements__sap_ui_vtm_interfaces_IVisibilityIconClickExtension: boolean;
    }
  }
}

declare module "sap/ui/vtm/ArrayUtilities" {
  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * A set of utility functions for working with arrays.
   */
  interface ArrayUtilities {
    /**
     * Returns `true` if a group of arrays are equal.
     */
    areEqual(
      /**
       * The array of arrays to compare.
       */
      arrayOfArrays: Array<any>,
      /**
       * A function that takes two parameters and returns a boolean value indicating whether the parameter values
       * are equal.
       */
      equalityFunc: Function
    ): boolean;
    /**
     * Creates a copy of an array in which the items are cloned.
     */
    deepClone(
      /**
       * The array to clone.
       */
      array: Array<any>,
      /**
       * A function used to clone an item of the array. The function has an argument that takes an item of the
       * type stored in the array and returns an item of the same type.
       */
      itemCloneFunc: Function
    ): Array<any>;
    /**
     * Returns the first item in an array that matches the supplied predicate or returns undefined if no match
     * is found.
     */
    find(
      /**
       * The array to search.
       */
      array: Array<any>,
      /**
       * A function that takes a value of the type stored in the array and returns a boolean value (true if the
       * item is a match.
       */
      predicate: Function
    ): any | undefined;
    /**
     * Returns the index of the first item in an array that matches the supplied predicate or returns -1 if
     * no match is found.
     */
    findIndex(
      /**
       * The array to search.
       */
      array: Array<any>,
      /**
       * A function that takes a value of the type stored in the array and returns a boolean value (true if the
       * item is a match.
       */
      predicate: Function
    ): number;
    /**
     * Flattens an array of arrays down to an array.
     */
    flatten(
      /**
       * An array of arrays.
       */
      arrayOfArrays: Array<any>
    ): Array<any>;
    /**
     * Converts from an array-like object (an object that supports indexing and has a length) to an array.
     */
    fromArrayLike(
      /**
       * The array-like object to convert to an array.
       */
      arrayLike: object
    ): Array<any>;
    /**
     * Converts an ES6 Set to an array.
     */
    fromSet(
      /**
       * The Set to convert to an array.
       */
      set: Set<any>
    ): Array<any>;
    /**
     * Returns whether a group of arrays have a non empty set intersection.
     */
    haveIntersection(
      /**
       * An array of arrays to check for the existence of a set intersection.
       */
      arrayOfArrays: Array<any>,
      /**
       * A function that returns a Boolean value to compare values within arrays. When not specified, strict equality
       * (`===`) is used to compare values.
       */
      equalityFunction: Function
    ): boolean;
    /**
     * Returns the set intersection of a group of arrays.
     */
    intersect(
      /**
       * An array of arrays to to find the set intersection of.
       */
      arrayOfArrays: Array<any>,
      /**
       * A function that returns a Boolean value to compare values within arrays. When not specified, strict equality
       * (`===`) is used to compare values.
       */
      equalityFunction: Function
    ): Array<any>;
    /**
     * Creates a copy of an array in which the items are copied by reference rather than being cloned.
     */
    shallowClone(
      /**
       * The array to clone.
       */
      array: Array<any>
    ): Array<any>;
    /**
     * Converts an array to an ES6 Set.
     */
    toSet(
      /**
       * The array to convert to a Set.
       */
      array: Array<any>
    ): Set<any>;
    /**
     * Returns the set union (as an array) of a group of arrays.
     */
    union(
      /**
       * An array of arrays to find the set union of.
       */
      arrayOfArrays: Array<any>,
      /**
       * A function that returns a Boolean value to compare values within arrays. When not specified, strict equality
       * (`===`) is used to compare values.
       */
      equalityFunction: Function
    ): Array<any>;
    /**
     * The inverse of {@link sap.ui.vtm.ArrayUtilities.wrap}.
     *
     *
     * 	 - If the parameter is not an array, the parameter is returned.
     * 	 - If the parameter is an array of length 0, `undefined` is returned.
     * 	 - If the parameter is an array of length 1, the first element of the array is returned.
     * 	 - Otherwise if the parameter is an array of length > 1, the parameter is returned (as an array).
     */
    unwrap(
      /**
       * The item to unwrap.
       */
      item: any
    ): any | Array<any> | undefined;
    /**
     * Wraps an item in an array if it is not already an array.
     *
     *
     * 	 - If the parameter is an array, the parameter is returned.
     * 	 - If the parameter is `undefined` an empty array is returned.
     * 	 - Otherwise a single element array containing the parameter value is returned.
     */
    wrap(
      /**
       * The item to wrap as an array if it is not already an array.
       */
      item: any
    ): Array<any>;
  }
  const ArrayUtilities: ArrayUtilities;
  export default ArrayUtilities;
}

declare module "sap/ui/vtm/ChildCollectionType" {
  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * Enumeration specifying which tree item child collections an operation should apply to.
   */
  enum ChildCollectionType {
    /**
     * The operation should apply to the `excludedChildren` collection of the tree item only.
     */
    Excluded = "Excluded",
    /**
     * The operation should apply to the `includedChildren` collection of the tree item only.
     */
    Included = "Included",
    /**
     * The operation should apply to the `includedChildren` and the `excludedChildren` collection of the tree
     * item.
     */
    IncludedAndExcluded = "IncludedAndExcluded",
    /**
     * The operation should not apply to either the `includedChildren` or `excludedChildren` collection of the
     * tree item.
     */
    None = "None",
  }
  export default ChildCollectionType;
}

declare module "sap/ui/vtm/Column" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import { HorizontalAlign, CSSSize } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import Control from "sap/ui/core/Control";

  import ColumnType from "sap/ui/vtm/ColumnType";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * Represents a data column for a {@link sap.ui.vtm.Tree}.
   */
  export default class Column extends UI5Element {
    /**
     * Constructor for a new Column.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * An optional ID for the {@link sap.ui.vtm.Column}.
       */
      sId: string,
      /**
       * An optional object with initial settings for the new {@link sap.ui.vtm.Column} instance.
       */
      mSettings: $ColumnSettings
    );

    /**
     * Creates a new subclass of class sap.ui.vtm.Column with name `sClassName` and enriches it with the information
     * contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, Column>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets current value of property {@link #getDescriptor descriptor}.
     *
     * The descriptor is a JSON string identifying the column.
     *
     * When the type property has a value of {@link sap.ui.vtm.ColumnType.Metadata} the descriptor property
     * has the following form: `'{"category":"SAP","field":"MATERIAL"}'`
     *  Such descriptors can be constructed using {@link sap.ui.vtm.DescriptorUtilities.createMetadataDescriptor}.
     *
     * When the type property has a value of {@link sap.ui.vtm.ColumnType.Identifier} the descriptor property
     * has the following form: `'{"source":"SAP","type":"VE_COMPONENT"}'`
     *  Such descriptors can be constructed using {@link sap.ui.vtm.DescriptorUtilities.createIdentifierDescriptor}.
     *
     * When the type property has a value of {@link sap.ui.vtm.ColumnType.AppData} the descriptor property has
     * the following form: `'bomId'`
     */
    getDescriptor(): string;
    /**
     * Gets current value of property {@link #getHAlign hAlign}.
     *
     * The horizontal alignment for the tree column.
     *
     * Default value is `"Left"`.
     */
    getHAlign(): HorizontalAlign | keyof typeof HorizontalAlign;
    /**
     * Gets current value of property {@link #getLabel label}.
     *
     * A textual name for the column. This is also used in the {@link sap.ui.vtm.ColumnSelectionDialog}, so
     * it should be included whether or not the `labelControl` property is used.
     */
    getLabel(): string;
    /**
     * Gets current value of property {@link #getLabelControl labelControl}.
     *
     * A {@link sap.ui.core.Control} that is used in the column header. When specified, this is used in preference
     * to the `label` property as the column header content. However the `label` property should also be specified
     * since it is used in the used in the {@link sap.ui.vtm.ColumnSelectionDialog}.
     */
    getLabelControl(): object;
    /**
     * Returns a metadata object for class sap.ui.vtm.Column.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getResizable resizable}.
     *
     * If set to true, the column can be resized.
     *
     * Default value is `true`.
     */
    getResizable(): boolean;
    /**
     * Gets current value of property {@link #getTemplate template}.
     *
     * If defined, overrides the cell template for the column.
     *  If this is defined, the `valueFormatter` and `tooltipFormatter` properties are ignored.
     */
    getTemplate(): Control;
    /**
     * Gets current value of property {@link #getTooltip tooltip}.
     *
     * A localized string to show in the column header tooltip. If unspecified, the label value will be used
     * as the column header tooltip.
     */
    getTooltip(): string;
    /**
     * Gets current value of property {@link #getTooltipFormatter tooltipFormatter}.
     *
     * If defined, this is a function that specifies the formatting of cell content tooltips for this column
     * (overriding the default behaviour).
     *  Not used if a custom template is specified.
     *  The function must return a string containing the text to display in the tooltip (or null) for a given
     * tree item.
     *  The first parameter to the function (which may not always be defined) is the tree item for the tree
     * table row.
     */
    getTooltipFormatter(): any;
    /**
     * Gets current value of property {@link #getType type}.
     *
     * The type of column.
     */
    getType(): ColumnType | keyof typeof ColumnType;
    /**
     * Gets current value of property {@link #getValueFormatter valueFormatter}.
     *
     * If defined, this is a function that specifies the formatting of cell content text for this column.
     *  The function must return a string containing the text to display in the cell (or null) for a given tree
     * item.
     *  The first parameter to the function (which may not always be defined) is the tree item for the tree
     * table row.
     */
    getValueFormatter(): any;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * The width of the tree column.
     *
     * Default value is `"200px"`.
     */
    getWidth(): CSSSize;
    /**
     * Sets a new value for property {@link #getDescriptor descriptor}.
     *
     * The descriptor is a JSON string identifying the column.
     *
     * When the type property has a value of {@link sap.ui.vtm.ColumnType.Metadata} the descriptor property
     * has the following form: `'{"category":"SAP","field":"MATERIAL"}'`
     *  Such descriptors can be constructed using {@link sap.ui.vtm.DescriptorUtilities.createMetadataDescriptor}.
     *
     * When the type property has a value of {@link sap.ui.vtm.ColumnType.Identifier} the descriptor property
     * has the following form: `'{"source":"SAP","type":"VE_COMPONENT"}'`
     *  Such descriptors can be constructed using {@link sap.ui.vtm.DescriptorUtilities.createIdentifierDescriptor}.
     *
     * When the type property has a value of {@link sap.ui.vtm.ColumnType.AppData} the descriptor property has
     * the following form: `'bomId'`
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setDescriptor(
      /**
       * New value for property `descriptor`
       */
      sDescriptor: string
    ): this;
    /**
     * Sets a new value for property {@link #getHAlign hAlign}.
     *
     * The horizontal alignment for the tree column.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"Left"`.
     */
    setHAlign(
      /**
       * New value for property `hAlign`
       */
      sHAlign?: HorizontalAlign | keyof typeof HorizontalAlign
    ): this;
    /**
     * Sets a new value for property {@link #getLabel label}.
     *
     * A textual name for the column. This is also used in the {@link sap.ui.vtm.ColumnSelectionDialog}, so
     * it should be included whether or not the `labelControl` property is used.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setLabel(
      /**
       * New value for property `label`
       */
      sLabel: string
    ): this;
    /**
     * Sets a new value for property {@link #getLabelControl labelControl}.
     *
     * A {@link sap.ui.core.Control} that is used in the column header. When specified, this is used in preference
     * to the `label` property as the column header content. However the `label` property should also be specified
     * since it is used in the used in the {@link sap.ui.vtm.ColumnSelectionDialog}.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setLabelControl(
      /**
       * New value for property `labelControl`
       */
      oLabelControl: object
    ): this;
    /**
     * Sets a new value for property {@link #getResizable resizable}.
     *
     * If set to true, the column can be resized.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setResizable(
      /**
       * New value for property `resizable`
       */
      bResizable?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getTemplate template}.
     *
     * If defined, overrides the cell template for the column.
     *  If this is defined, the `valueFormatter` and `tooltipFormatter` properties are ignored.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setTemplate(
      /**
       * New value for property `template`
       */
      sTemplate: Control
    ): this;
    /**
     * Sets a new value for property {@link #getTooltip tooltip}.
     *
     * A localized string to show in the column header tooltip. If unspecified, the label value will be used
     * as the column header tooltip.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setTooltip(
      /**
       * New value for property `tooltip`
       */
      sTooltip?: string
    ): this;
    /**
     * Sets a new value for property {@link #getTooltipFormatter tooltipFormatter}.
     *
     * If defined, this is a function that specifies the formatting of cell content tooltips for this column
     * (overriding the default behaviour).
     *  Not used if a custom template is specified.
     *  The function must return a string containing the text to display in the tooltip (or null) for a given
     * tree item.
     *  The first parameter to the function (which may not always be defined) is the tree item for the tree
     * table row.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setTooltipFormatter(
      /**
       * New value for property `tooltipFormatter`
       */
      oTooltipFormatter: any
    ): this;
    /**
     * Sets a new value for property {@link #getType type}.
     *
     * The type of column.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setType(
      /**
       * New value for property `type`
       */
      sType: ColumnType | keyof typeof ColumnType
    ): this;
    /**
     * Sets a new value for property {@link #getValueFormatter valueFormatter}.
     *
     * If defined, this is a function that specifies the formatting of cell content text for this column.
     *  The function must return a string containing the text to display in the cell (or null) for a given tree
     * item.
     *  The first parameter to the function (which may not always be defined) is the tree item for the tree
     * table row.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setValueFormatter(
      /**
       * New value for property `valueFormatter`
       */
      oValueFormatter: any
    ): this;
    /**
     * Sets a new value for property {@link #getWidth width}.
     *
     * The width of the tree column.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"200px"`.
     */
    setWidth(
      /**
       * New value for property `width`
       */
      sWidth?: CSSSize
    ): this;
  }

  export interface $ColumnSettings extends $ElementSettings {
    /**
     * The type of column.
     */
    type?: (ColumnType | keyof typeof ColumnType) | PropertyBindingInfo;

    /**
     * The descriptor is a JSON string identifying the column.
     *
     * When the type property has a value of {@link sap.ui.vtm.ColumnType.Metadata} the descriptor property
     * has the following form: `'{"category":"SAP","field":"MATERIAL"}'`
     *  Such descriptors can be constructed using {@link sap.ui.vtm.DescriptorUtilities.createMetadataDescriptor}.
     *
     * When the type property has a value of {@link sap.ui.vtm.ColumnType.Identifier} the descriptor property
     * has the following form: `'{"source":"SAP","type":"VE_COMPONENT"}'`
     *  Such descriptors can be constructed using {@link sap.ui.vtm.DescriptorUtilities.createIdentifierDescriptor}.
     *
     * When the type property has a value of {@link sap.ui.vtm.ColumnType.AppData} the descriptor property has
     * the following form: `'bomId'`
     */
    descriptor?: string | PropertyBindingInfo;

    /**
     * A localized string to show in the column header tooltip. If unspecified, the label value will be used
     * as the column header tooltip.
     */
    tooltip?: string | PropertyBindingInfo;

    /**
     * The horizontal alignment for the tree column.
     */
    hAlign?:
      | (HorizontalAlign | keyof typeof HorizontalAlign)
      | PropertyBindingInfo;

    /**
     * The width of the tree column.
     */
    width?: CSSSize | PropertyBindingInfo;

    /**
     * If set to true, the column can be resized.
     */
    resizable?: boolean | PropertyBindingInfo;

    /**
     * A textual name for the column. This is also used in the {@link sap.ui.vtm.ColumnSelectionDialog}, so
     * it should be included whether or not the `labelControl` property is used.
     */
    label?: string | PropertyBindingInfo;

    /**
     * A {@link sap.ui.core.Control} that is used in the column header. When specified, this is used in preference
     * to the `label` property as the column header content. However the `label` property should also be specified
     * since it is used in the used in the {@link sap.ui.vtm.ColumnSelectionDialog}.
     */
    labelControl?: object | PropertyBindingInfo;

    /**
     * If defined, this is a function that specifies the formatting of cell content text for this column.
     *  The function must return a string containing the text to display in the cell (or null) for a given tree
     * item.
     *  The first parameter to the function (which may not always be defined) is the tree item for the tree
     * table row.
     */
    valueFormatter?: any | PropertyBindingInfo;

    /**
     * If defined, this is a function that specifies the formatting of cell content tooltips for this column
     * (overriding the default behaviour).
     *  Not used if a custom template is specified.
     *  The function must return a string containing the text to display in the tooltip (or null) for a given
     * tree item.
     *  The first parameter to the function (which may not always be defined) is the tree item for the tree
     * table row.
     */
    tooltipFormatter?: any | PropertyBindingInfo;

    /**
     * If defined, overrides the cell template for the column.
     *  If this is defined, the `valueFormatter` and `tooltipFormatter` properties are ignored.
     */
    template?: Control | PropertyBindingInfo;
  }
}

declare module "sap/ui/vtm/ColumnType" {
  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * Enumeration specifying types of {@link sap.ui.vtm.Column}.
   */
  enum ColumnType {
    /**
     * The AppData (application data) column type. This type of column represents application data that is neither
     * metadata nor identifier data.
     */
    AppData = "AppData",
    /**
     * The Identifier column type. This type of column represents identifiers retrieved from viewables (or metadata
     * values supplied by the application which will be present in exported viewables).
     */
    Identifier = "Identifier",
    /**
     * The Internal column type. Columns of this type:
     * 	 - Should not be used for application data (all columns of this type are defined by VTM).
     * 	 - Is not normally expected to be used by end users (columns of this type are typically expected to
     * 			be used for development/debugging).
     */
    Internal = "Internal",
    /**
     * The Metadata column type. This type of column represents metadata retrieved from viewables (or metadata
     * values supplied by the application which will be present in exported viewables).
     */
    Metadata = "Metadata",
  }
  export default ColumnType;
}

declare module "sap/ui/vtm/DescriptorUtilities" {
  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * A set of utility functions for working with metadata and identifier descriptors.
   */
  interface DescriptorUtilities {
    /**
     * Creates a descriptor for an identifier.
     */
    createIdentifierDescriptor(
      /**
       * The identifier source.
       */
      source: string,
      /**
       * The identifier type.
       */
      type: string
    ): string;
    /**
     * Creates a descriptor for a metadata field.
     */
    createMetadataDescriptor(
      /**
       * The category name.
       */
      category: string,
      /**
       * The field name.
       */
      field: string
    ): string;
  }
  const DescriptorUtilities: DescriptorUtilities;
  export default DescriptorUtilities;
}

declare module "sap/ui/vtm/DisplayGroup" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * This class is used to represent display states for a set of scene nodes. The same display state need
   * not be used for all of the scene nodes in the set.
   */
  export default class DisplayGroup extends UI5Element {
    /**
     * Constructor for a new DisplayGroup.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * An optional ID for the {@link sap.ui.vtm.DisplayGroup}.
       */
      sId: string,
      /**
       * An optional object with initial settings for the new {@link sap.ui.vtm.DisplayGroup} instance.
       */
      mSettings?: $DisplayGroupSettings
    );

    /**
     * Creates a new subclass of class sap.ui.vtm.DisplayGroup with name `sClassName` and enriches it with the
     * information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, DisplayGroup>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets current value of property {@link #getDisplayStatesBySceneNodeId displayStatesBySceneNodeId}.
     *
     * A plain object map that uses scene node id as the key and a display state object as the value. The display
     * state is a plain JavaScript object that can contain the following properties:
     * 	 - visibility - If defined, this boolean value specifies the scene node visibility
     * 	 - opacity - If defined, this numeric value between 0 and 100 inclusive defines the scene node opacity.
     *
     * 	 - highlightColor - If defined, this string value defines the scene node highlight color. If an empty
     * 			string (`""`) is used, the highlight color is cleared, otherwise the value is expected to be a {@link
     * 			sap.ui.core.CSSColor}.
     * 	 - recursive - If `true` this display state will be applied to the scene node and its descendants.
     * 			For example:
     * ```javascript
     *
     * {
     *   visibility: true,
     *   opacity: 100,
     *   highlightColor: "red",
     *   recursive: false
     * }```
     *  Display state objects can be reused multiple times in the map to reduce memory usage.
     *
     * Default value is `{}`.
     */
    getDisplayStatesBySceneNodeId(): object;
    /**
     * Returns a metadata object for class sap.ui.vtm.DisplayGroup.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Sets a new value for property {@link #getDisplayStatesBySceneNodeId displayStatesBySceneNodeId}.
     *
     * A plain object map that uses scene node id as the key and a display state object as the value. The display
     * state is a plain JavaScript object that can contain the following properties:
     * 	 - visibility - If defined, this boolean value specifies the scene node visibility
     * 	 - opacity - If defined, this numeric value between 0 and 100 inclusive defines the scene node opacity.
     *
     * 	 - highlightColor - If defined, this string value defines the scene node highlight color. If an empty
     * 			string (`""`) is used, the highlight color is cleared, otherwise the value is expected to be a {@link
     * 			sap.ui.core.CSSColor}.
     * 	 - recursive - If `true` this display state will be applied to the scene node and its descendants.
     * 			For example:
     * ```javascript
     *
     * {
     *   visibility: true,
     *   opacity: 100,
     *   highlightColor: "red",
     *   recursive: false
     * }```
     *  Display state objects can be reused multiple times in the map to reduce memory usage.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `{}`.
     */
    setDisplayStatesBySceneNodeId(
      /**
       * New value for property `displayStatesBySceneNodeId`
       */
      oDisplayStatesBySceneNodeId?: object
    ): this;
  }

  export interface $DisplayGroupSettings extends $ElementSettings {
    /**
     * A plain object map that uses scene node id as the key and a display state object as the value. The display
     * state is a plain JavaScript object that can contain the following properties:
     * 	 - visibility - If defined, this boolean value specifies the scene node visibility
     * 	 - opacity - If defined, this numeric value between 0 and 100 inclusive defines the scene node opacity.
     *
     * 	 - highlightColor - If defined, this string value defines the scene node highlight color. If an empty
     * 			string (`""`) is used, the highlight color is cleared, otherwise the value is expected to be a {@link
     * 			sap.ui.core.CSSColor}.
     * 	 - recursive - If `true` this display state will be applied to the scene node and its descendants.
     * 			For example:
     * ```javascript
     *
     * {
     *   visibility: true,
     *   opacity: 100,
     *   highlightColor: "red",
     *   recursive: false
     * }```
     *  Display state objects can be reused multiple times in the map to reduce memory usage.
     */
    displayStatesBySceneNodeId?: object | PropertyBindingInfo;
  }
}

declare module "sap/ui/vtm/Extension" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import Vtm from "sap/ui/vtm/Vtm";

  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * A base class for extensions.
   *
   * Extensions provide an extensibility mechanism through which behaviors can be added, allowing for a default
   * set of behaviors that can be overridden by application developers. Extensions react to events raised
   * by VTM elements/controls or other extensions.
   *
   * Derived classes should provide their own {@link #initialize} implementation. Extensions are expected
   * to be as independent from one another as possible.
   *
   * Extensions implement interfaces to indicate the functional role(s) that they fulfill. Extensions can
   * be found by interface calling {@link sap.ui.vtm.Vtm#getExtensionByInterface getExtensionByInterface}.
   * Specific extensions can be found using {@link sap.ui.vtm.Vtm#getExtensionByName getExtensionByName}.
   * Typically extensions are retrieved using these methods in order to get or set their `enabled` property.
   */
  export default class Extension extends UI5Element {
    /**
     * This class is an abstract class that is not intended to be instantiated directly.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * id for the new {@link sap.m.Extension} instance.
       */
      sId: string,
      /**
       * Object with initial property values, aggregated objects etc. for the new {@link sap.m.Extension} instance.
       */
      mSettings: $ExtensionSettings
    );

    /**
     * Calls a function once for each panel that is attached (currently or in the future) to the {@link sap.ui.vtm.Vtm}
     * instance that owns this extension.
     *
     * This function should only be used after the Promise returned by {@link #getVtmPromise} has resolved.
     */
    applyPanelHandler(
      /**
       * A function that takes one {@link sap.ui.vtm.Panel} argument.
       */
      panelHandler: Function
    ): void;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:enabledChanged enabledChanged} event of this
     * `sap.ui.vtm.Extension`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Extension` itself.
     *
     * Fired when the enabled property is changed.
     */
    attachEnabledChanged(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Extension` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:initialized initialized} event of this `sap.ui.vtm.Extension`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Extension` itself.
     *
     * Fired when initialization has completed.
     */
    attachInitialized(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Extension` itself
       */
      oListener?: object
    ): this;
    /**
     * Binds property {@link #getEnabled enabled} to model data.
     *
     * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a detailed description
     * of the possible properties of `oBindingInfo`
     */
    bindEnabled(
      /**
       * The binding information
       */
      oBindingInfo: PropertyBindingInfo
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:enabledChanged enabledChanged} event of this
     * `sap.ui.vtm.Extension`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachEnabledChanged(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:initialized initialized} event of this `sap.ui.vtm.Extension`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachInitialized(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Creates a new subclass of class sap.ui.vtm.Extension with name `sClassName` and enriches it with the
     * information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, Extension>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Fires event {@link #event:enabledChanged enabledChanged} to attached listeners.
     */
    fireEnabledChanged(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:initialized initialized} to attached listeners.
     */
    fireInitialized(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Gets current value of property {@link #getEnabled enabled}.
     *
     * Controls whether the extension is enabled.
     *
     * Default value is `true`.
     */
    getEnabled(): boolean;
    /**
     * Gets a {@link Promise} that resolves after the {@link #initialize initialize} method has been called
     * for the extension.
     *
     * The {@link #initialize initialize} method is called after the {@link Promise} returned by {@link #getVtmPromise
     * getVtmPromise} resolves.
     */
    getInitializedPromise(): Promise<any>;
    /**
     * Returns a metadata object for class sap.ui.vtm.Extension.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets a {@link Promise} that resolves when the extension is added to the `extensions` aggregation of an
     * {@link sap.ui.vtm.Vtm} instance.
     *
     * The relevant {@link sap.ui.vtm.Vtm} instance is passed to the resolve handler.
     */
    getVtmPromise(): Promise<any>;
    /**
     * Contains initialization code for the extension. Derived classes must redefine this method.
     */
    initialize(
      /**
       * The {@link sap.ui.vtm.Vtm} instance that this extension belongs to.
       */
      vtm: Vtm
    ): void;
    /**
     * Sets a new value for property {@link #getEnabled enabled}.
     *
     * Controls whether the extension is enabled.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setEnabled(
      /**
       * New value for property `enabled`
       */
      bEnabled?: boolean
    ): this;
    /**
     * Unbinds property {@link #getEnabled enabled} from model data.
     */
    unbindEnabled(): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:enabledChanged enabledChanged} event of this
     * `sap.ui.vtm.Extension`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Extension` itself.
     *
     * Fired when the enabled property is changed.
     */
    attachEnabledChanged(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Extension` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:initialized initialized} event of this `sap.ui.vtm.Extension`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Extension` itself.
     *
     * Fired when initialization has completed.
     */
    attachInitialized(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Extension` itself
       */
      oListener?: object
    ): this;
  }

  export interface $ExtensionSettings extends $ElementSettings {
    /**
     * Controls whether the extension is enabled.
     */
    enabled?: boolean | PropertyBindingInfo;

    /**
     * Fired when the enabled property is changed.
     */
    enabledChanged?: Function;

    /**
     * Fired when initialization has completed.
     */
    initialized?: Function;
  }
}

declare module "sap/ui/vtm/extensions/DisplayStateCalculationExtension" {
  import {
    default as Extension,
    $ExtensionSettings,
  } from "sap/ui/vtm/Extension";

  import { interfaces } from "sap/ui/vtm/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * Adds a behavior that calculates display state (visibility, opacity, highlight color) for the scene nodes
   * in a viewport using information in the tree items, context display groups and override display groups.
   *
   * Excluded tree items are ignored when calculating display state since visible scene nodes that are not
   * visible due to a context or override display group should relate to one or more selectable tree items
   * in the tree.
   */
  export default class DisplayStateCalculationExtension
    extends Extension
    implements interfaces.IDisplayStateCalculationExtension {
    __implements__sap_ui_vtm_interfaces_IDisplayStateCalculationExtension: boolean;
    /**
     * Constructor for a new DisplayStateCalculationExtension.
     */
    constructor(
      /**
       * id for the new {@link sap.ui.vtm.extensions.DisplayStateCalculationExtension} instance.
       */
      sId: string,
      /**
       * Object with initial property values, aggregated objects etc. for the new {@link sap.ui.vtm.extensions.DisplayStateCalculationExtension}
       * instance.
       */
      mSettings: $DisplayStateCalculationExtensionSettings
    );

    /**
     * Creates a new subclass of class sap.ui.vtm.extensions.DisplayStateCalculationExtension with name `sClassName`
     * and enriches it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.vtm.Extension.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, DisplayStateCalculationExtension>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.vtm.extensions.DisplayStateCalculationExtension.
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $DisplayStateCalculationExtensionSettings
    extends $ExtensionSettings {}
}

declare module "sap/ui/vtm/extensions/InitialViewExtension" {
  import {
    default as Extension,
    $ExtensionSettings,
  } from "sap/ui/vtm/Extension";

  import { interfaces } from "sap/ui/vtm/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import PredefinedView from "sap/ui/vtm/PredefinedView";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * Adds a behavior that zooms to all (or a specific view) after the first viewable has loaded successfully.
   */
  export default class InitialViewExtension
    extends Extension
    implements interfaces.IInitialViewExtension {
    __implements__sap_ui_vtm_interfaces_IInitialViewExtension: boolean;
    /**
     * Constructor for a new InitialViewExtension.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * id for the new {@link sap.ui.vtm.extensions.InitialViewExtension} instance.
       */
      sId: string,
      /**
       * Object with initial property values, aggregated objects etc. for the new {@link sap.ui.vtm.extensions.InitialViewExtension}
       * instance.
       */
      mSettings: $InitialViewExtensionSettings
    );

    /**
     * Creates a new subclass of class sap.ui.vtm.extensions.InitialViewExtension with name `sClassName` and
     * enriches it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.vtm.Extension.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, InitialViewExtension>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.vtm.extensions.InitialViewExtension.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getPredefinedView predefinedView}.
     *
     * Specifies a predefined view to use. If a specific view is not specified this extension will zoom to fit
     * all geometry without changing the camera angle.
     */
    getPredefinedView(): PredefinedView;
    /**
     * Sets a new value for property {@link #getPredefinedView predefinedView}.
     *
     * Specifies a predefined view to use. If a specific view is not specified this extension will zoom to fit
     * all geometry without changing the camera angle.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setPredefinedView(
      /**
       * New value for property `predefinedView`
       */
      sPredefinedView: PredefinedView
    ): this;
  }

  export interface $InitialViewExtensionSettings extends $ExtensionSettings {
    /**
     * Specifies a predefined view to use. If a specific view is not specified this extension will zoom to fit
     * all geometry without changing the camera angle.
     */
    predefinedView?: PredefinedView | PropertyBindingInfo;
  }
}

declare module "sap/ui/vtm/extensions/LoadProgressExtension" {
  import {
    default as Extension,
    $ExtensionSettings,
  } from "sap/ui/vtm/Extension";

  import { interfaces } from "sap/ui/vtm/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * Adds a behavior that shows a progress dialog when downloading/loading of viewables is occurring.
   */
  export default class LoadProgressExtension
    extends Extension
    implements
      interfaces.ILoadProgressExtension,
      interfaces.IDownloadProgressExtension {
    __implements__sap_ui_vtm_interfaces_ILoadProgressExtension: boolean;
    __implements__sap_ui_vtm_interfaces_IDownloadProgressExtension: boolean;
    /**
     * Constructor for a new LoadProgressExtension.
     */
    constructor(
      /**
       * id for the new {@link sap.ui.vtm.extensions.LoadProgressExtension} instance.
       */
      sId: string,
      /**
       * Object with initial property values, aggregated objects etc. for the new {@link sap.ui.vtm.extensions.LoadProgressExtension}
       * instance.
       */
      mSettings: $LoadProgressExtensionSettings
    );

    /**
     * Creates a new subclass of class sap.ui.vtm.extensions.LoadProgressExtension with name `sClassName` and
     * enriches it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.vtm.Extension.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, LoadProgressExtension>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.vtm.extensions.LoadProgressExtension.
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $LoadProgressExtensionSettings extends $ExtensionSettings {}
}

declare module "sap/ui/vtm/extensions/MessageStatusCalculationExtension" {
  import {
    default as Extension,
    $ExtensionSettings,
  } from "sap/ui/vtm/Extension";

  import { interfaces } from "sap/ui/vtm/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * Adds a behavior that calculates the properties of the message status icons. The behavior:
   * 	 - Allows for error, warning and information messages.
   * 	 - Uses red icons for error related indications.
   * 	 - Uses yellow icons for warning related indications.
   * 	 - Uses grey informational icons for informational indications.
   * 	 - Uses solid icons to indicate errors or warnings that apply directly to a tree item.
   * 	 - Uses hollow icons to indicate that an error or warning applies to a descendant of a tree item.
   * 	 - The highest priority status that applies to a tree item or a descendant tree item is indicated on
   * 			each tree item.
   * 	 - When the highest priority status that applies to a tree item is the same as the highest priority
   * 			status that applies to any descendant tree, the highest priority message that applies directly to the
   * 			tree item is indicated.
   * 	 - Error messages on descendants are given higher priority than warning or information messages that
   * 			apply to the tree item itself
   * 	 - Warning messages on descendants are given a higher priority than information messages that apply
   * 			to the tree item
   * 	 - Information messages are not cascaded up the tree
   */
  export default class MessageStatusCalculationExtension
    extends Extension
    implements interfaces.IMessageStatusCalculationExtension {
    __implements__sap_ui_vtm_interfaces_IMessageStatusCalculationExtension: boolean;
    /**
     * Constructor for a new MessageStatusCalculationExtension.
     */
    constructor(
      /**
       * id for the new {@link sap.m.MessageStatusCalculationExtension} instance.
       */
      sId: string,
      /**
       * Object with initial property values, aggregated objects etc. for the new {@link sap.m.MessageStatusCalculationExtension}
       * instance.
       */
      mSettings: $MessageStatusCalculationExtensionSettings
    );

    /**
     * Creates a new subclass of class sap.ui.vtm.extensions.MessageStatusCalculationExtension with name `sClassName`
     * and enriches it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.vtm.Extension.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, MessageStatusCalculationExtension>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.vtm.extensions.MessageStatusCalculationExtension.
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $MessageStatusCalculationExtensionSettings
    extends $ExtensionSettings {}
}

declare module "sap/ui/vtm/extensions/MessageStatusIconClickExtension" {
  import {
    default as Extension,
    $ExtensionSettings,
  } from "sap/ui/vtm/Extension";

  import { interfaces } from "sap/ui/vtm/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * Adds a behavior that shows a {@link sap.ui.vtm.MessagesPopover} when a message status icon is clicked.
   */
  export default class MessageStatusIconClickExtension
    extends Extension
    implements interfaces.IMessageStatusIconClickExtension {
    __implements__sap_ui_vtm_interfaces_IMessageStatusIconClickExtension: boolean;
    /**
     * Constructor for a new MessageStatusIconClickExtension.
     */
    constructor(
      /**
       * id for the new {@link sap.m.MessageStatusIconClickExtension} instance.
       */
      sId: string,
      /**
       * Object with initial property values, aggregated objects etc. for the new {@link sap.m.MessageStatusIconClickExtension}
       * instance.
       */
      mSettings: $MessageStatusIconClickExtensionSettings
    );

    /**
     * Creates a new subclass of class sap.ui.vtm.extensions.MessageStatusIconClickExtension with name `sClassName`
     * and enriches it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.vtm.Extension.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, MessageStatusIconClickExtension>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.vtm.extensions.MessageStatusIconClickExtension.
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $MessageStatusIconClickExtensionSettings
    extends $ExtensionSettings {}
}

declare module "sap/ui/vtm/extensions/SceneNodeHoverHighlightExtension" {
  import {
    default as Extension,
    $ExtensionSettings,
  } from "sap/ui/vtm/Extension";

  import { interfaces } from "sap/ui/vtm/library";

  import { CSSColor } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * Adds a behaviour which highlights a scene node when the mouse hovers over it.
   */
  export default class SceneNodeHoverHighlightExtension
    extends Extension
    implements interfaces.ISceneNodeHoverHighlightExtension {
    __implements__sap_ui_vtm_interfaces_ISceneNodeHoverHighlightExtension: boolean;
    /**
     * Constructor for a new SceneNodeHoverTooltipExtension.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * id for the new instance.
       */
      sId: string,
      /**
       * Object with initial property values, aggregated objects etc. for the new instance.
       */
      mSettings: $SceneNodeHoverHighlightExtensionSettings
    );

    /**
     * Creates a new subclass of class sap.ui.vtm.extensions.SceneNodeHoverHighlightExtension with name `sClassName`
     * and enriches it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.vtm.Extension.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, SceneNodeHoverHighlightExtension>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets current value of property {@link #getHighlightColor highlightColor}.
     *
     * The highlight color to use for the scene node being hovered over.
     *
     * Default value is `"rgba(0, 0, 255, 0.7)"`.
     */
    getHighlightColor(): CSSColor;
    /**
     * Returns a metadata object for class sap.ui.vtm.extensions.SceneNodeHoverHighlightExtension.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Sets a new value for property {@link #getHighlightColor highlightColor}.
     *
     * The highlight color to use for the scene node being hovered over.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"rgba(0, 0, 255, 0.7)"`.
     */
    setHighlightColor(
      /**
       * New value for property `highlightColor`
       */
      sHighlightColor?: CSSColor
    ): this;
  }

  export interface $SceneNodeHoverHighlightExtensionSettings
    extends $ExtensionSettings {
    /**
     * The highlight color to use for the scene node being hovered over.
     */
    highlightColor?: CSSColor | PropertyBindingInfo;
  }
}

declare module "sap/ui/vtm/extensions/SceneNodeHoverTooltipExtension" {
  import {
    default as Extension,
    $ExtensionSettings,
  } from "sap/ui/vtm/Extension";

  import { interfaces } from "sap/ui/vtm/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * Adds a behaviour in which a tooltip (which can be specified by application code using a callback function)
   * is displayed when the mouse is hovering over a scene node.
   */
  export default class SceneNodeHoverTooltipExtension
    extends Extension
    implements interfaces.ISceneNodeHoverTooltipExtension {
    __implements__sap_ui_vtm_interfaces_ISceneNodeHoverTooltipExtension: boolean;
    /**
     * Constructor for a new SceneNodeHoverTooltipExtension.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * id for the new instance.
       */
      sId: string,
      /**
       * Object with initial property values, aggregated objects etc. for the new instance.
       */
      mSettings: $SceneNodeHoverTooltipExtensionSettings
    );

    /**
     * Creates a new subclass of class sap.ui.vtm.extensions.SceneNodeHoverTooltipExtension with name `sClassName`
     * and enriches it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.vtm.Extension.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, SceneNodeHoverTooltipExtension>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.vtm.extensions.SceneNodeHoverTooltipExtension.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getTooltipCallback tooltipCallback}.
     *
     * A callback function that gets a tooltip for a given {@link sap.ui.vtm.SceneNode}. If unspecified, the
     * scene node name is used for the tooltip text.
     *
     * The first parameter is the {@link sap.ui.vtm.SceneNode} under cursor.
     *  The function should return an object containing a tooltip text for the specified scene node.
     * ```javascript
     *
     *   {
     *     text: [string]
     *   }
     * ```
     *  If function returns null no tooltip will be displayed.
     */
    getTooltipCallback(): any;
    /**
     * Sets a new value for property {@link #getTooltipCallback tooltipCallback}.
     *
     * A callback function that gets a tooltip for a given {@link sap.ui.vtm.SceneNode}. If unspecified, the
     * scene node name is used for the tooltip text.
     *
     * The first parameter is the {@link sap.ui.vtm.SceneNode} under cursor.
     *  The function should return an object containing a tooltip text for the specified scene node.
     * ```javascript
     *
     *   {
     *     text: [string]
     *   }
     * ```
     *  If function returns null no tooltip will be displayed.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setTooltipCallback(
      /**
       * New value for property `tooltipCallback`
       */
      oTooltipCallback?: any
    ): this;
  }

  export interface $SceneNodeHoverTooltipExtensionSettings
    extends $ExtensionSettings {
    /**
     * A callback function that gets a tooltip for a given {@link sap.ui.vtm.SceneNode}. If unspecified, the
     * scene node name is used for the tooltip text.
     *
     * The first parameter is the {@link sap.ui.vtm.SceneNode} under cursor.
     *  The function should return an object containing a tooltip text for the specified scene node.
     * ```javascript
     *
     *   {
     *     text: [string]
     *   }
     * ```
     *  If function returns null no tooltip will be displayed.
     */
    tooltipCallback?: any | PropertyBindingInfo;
  }
}

declare module "sap/ui/vtm/extensions/SelectionLinkingExtension" {
  import {
    default as Extension,
    $ExtensionSettings,
  } from "sap/ui/vtm/Extension";

  import { interfaces } from "sap/ui/vtm/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * Adds a behavior that links items the visibility of tree items in a {@link sap.ui.vtm.Tree} with the visibility
   * of their associated scene nodes in the {@link sap.ui.vtm.Viewport} in the same {@link sap.ui.vtm.Panel}.
   */
  export default class SelectionLinkingExtension
    extends Extension
    implements interfaces.ISelectionLinkingExtension {
    __implements__sap_ui_vtm_interfaces_ISelectionLinkingExtension: boolean;
    /**
     * Constructor for a new SelectionLinkingExtension.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * id for the new {@link sap.ui.vtm.extensions.SelectionLinkingExtension} instance.
       */
      sId: string,
      /**
       * Object with initial property values, aggregated objects etc. for the new {@link sap.ui.vtm.extensions.SelectionLinkingExtension}
       * instance.
       */
      mSettings: $SelectionLinkingExtensionSettings
    );

    /**
     * Creates a new subclass of class sap.ui.vtm.extensions.SelectionLinkingExtension with name `sClassName`
     * and enriches it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.vtm.Extension.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, SelectionLinkingExtension>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets current value of property {@link #getFindMatchingTreeItems findMatchingTreeItems}.
     *
     * The value is a callback function that finds tree items in a particular tree that match a given tree item.
     *
     * The first parameter is the tree item to match against.
     *  The second parameter is the {@link sap.ui.vtm.Tree} containing the specified tree item being matched
     * against.
     *  The third parameter is the {@link sap.ui.vtm.Tree} to search for matches in.
     *  The function returns an array of tree items that match the specified tree item.
     */
    getFindMatchingTreeItems(): any;
    /**
     * Returns a metadata object for class sap.ui.vtm.extensions.SelectionLinkingExtension.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Sets a new value for property {@link #getFindMatchingTreeItems findMatchingTreeItems}.
     *
     * The value is a callback function that finds tree items in a particular tree that match a given tree item.
     *
     * The first parameter is the tree item to match against.
     *  The second parameter is the {@link sap.ui.vtm.Tree} containing the specified tree item being matched
     * against.
     *  The third parameter is the {@link sap.ui.vtm.Tree} to search for matches in.
     *  The function returns an array of tree items that match the specified tree item.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setFindMatchingTreeItems(
      /**
       * New value for property `findMatchingTreeItems`
       */
      oFindMatchingTreeItems?: any
    ): this;
  }

  export interface $SelectionLinkingExtensionSettings
    extends $ExtensionSettings {
    /**
     * The value is a callback function that finds tree items in a particular tree that match a given tree item.
     *
     * The first parameter is the tree item to match against.
     *  The second parameter is the {@link sap.ui.vtm.Tree} containing the specified tree item being matched
     * against.
     *  The third parameter is the {@link sap.ui.vtm.Tree} to search for matches in.
     *  The function returns an array of tree items that match the specified tree item.
     */
    findMatchingTreeItems?: any | PropertyBindingInfo;
  }
}

declare module "sap/ui/vtm/extensions/ViewLinkingExtension" {
  import {
    default as Extension,
    $ExtensionSettings,
  } from "sap/ui/vtm/Extension";

  import { interfaces } from "sap/ui/vtm/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * Adds a behavior that links the camera views for all the {@link sap.ui.vtm.Viewport} instances associated
   * with a {@link sap.ui.vtm.Vtm} instance.
   */
  export default class ViewLinkingExtension
    extends Extension
    implements interfaces.IViewLinkingExtension {
    __implements__sap_ui_vtm_interfaces_IViewLinkingExtension: boolean;
    /**
     * Constructor for the ViewLinkingExtension.
     */
    constructor();

    /**
     * Creates a new subclass of class sap.ui.vtm.extensions.ViewLinkingExtension with name `sClassName` and
     * enriches it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.vtm.Extension.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, ViewLinkingExtension>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.vtm.extensions.ViewLinkingExtension.
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $ViewLinkingExtensionSettings extends $ExtensionSettings {}
}

declare module "sap/ui/vtm/extensions/ViewportSelectionLinkingExtension" {
  import {
    default as Extension,
    $ExtensionSettings,
  } from "sap/ui/vtm/Extension";

  import { interfaces } from "sap/ui/vtm/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * Adds a behavior that links the selection state of tree items in a {@link sap.ui.vtm.Tree} with their
   * corresponding scene nodes in the {@link sap.ui.vtm.Viewport} in the same {@link sap.ui.vtm.Panel}.
   */
  export default class ViewportSelectionLinkingExtension
    extends Extension
    implements interfaces.IViewportSelectionLinkingExtension {
    __implements__sap_ui_vtm_interfaces_IViewportSelectionLinkingExtension: boolean;
    /**
     * Constructor for a new ViewportSelectionLinkingExtension.
     */
    constructor(
      /**
       * id for the new {@link sap.ui.vtm.extensions.ViewportSelectionLinkingExtension} instance.
       */
      sId: string,
      /**
       * Object with initial property values, aggregated objects etc. for the new {@link sap.ui.vtm.extensions.ViewportSelectionLinkingExtension}
       * instance.
       */
      mSettings: $ViewportSelectionLinkingExtensionSettings
    );

    /**
     * Creates a new subclass of class sap.ui.vtm.extensions.ViewportSelectionLinkingExtension with name `sClassName`
     * and enriches it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.vtm.Extension.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, ViewportSelectionLinkingExtension>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.vtm.extensions.ViewportSelectionLinkingExtension.
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $ViewportSelectionLinkingExtensionSettings
    extends $ExtensionSettings {}
}

declare module "sap/ui/vtm/extensions/VisibilityIconClickExtension" {
  import {
    default as Extension,
    $ExtensionSettings,
  } from "sap/ui/vtm/Extension";

  import { interfaces } from "sap/ui/vtm/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * Adds a behavior that updates visibility in the {@link sap.ui.vtm.Tree} when a visibility checkbox (eye)
   * is clicked.
   */
  export default class VisibilityIconClickExtension
    extends Extension
    implements
      interfaces.IVisibilityIconClickExtension,
      interfaces.IVisibilityHeaderIconClickExtension {
    __implements__sap_ui_vtm_interfaces_IVisibilityIconClickExtension: boolean;
    __implements__sap_ui_vtm_interfaces_IVisibilityHeaderIconClickExtension: boolean;
    /**
     * Constructor for a new VisibilityIconClickExtension.
     */
    constructor(
      /**
       * id for the new {@link sap.ui.vtm.extensions.VisibilityIconClickExtension} instance.
       */
      sId: string,
      /**
       * Object with initial property values, aggregated objects etc. for the new {@link sap.ui.vtm.extensions.VisibilityIconClickExtension}
       * instance.
       */
      mSettings: $VisibilityIconClickExtensionSettings
    );

    /**
     * Creates a new subclass of class sap.ui.vtm.extensions.VisibilityIconClickExtension with name `sClassName`
     * and enriches it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.vtm.Extension.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, VisibilityIconClickExtension>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.vtm.extensions.VisibilityIconClickExtension.
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $VisibilityIconClickExtensionSettings
    extends $ExtensionSettings {}
}

declare module "sap/ui/vtm/HashUtilities" {
  import { Matrix } from "sap/ui/vtm/library";

  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * A set of utility functions for working with hash values.
   */
  interface HashUtilities {
    /**
     * Creates a single hash code from a set of hash code values and normalizes it using {@link sap.ui.vtm.HashUtilities.normalizeHash}.
     */
    combineHashes(
      /**
       * A set of hash code values to combine.
       */
      hashValues: int[],
      /**
       * An upper bound for the hash code. Defaults to 50000.
       */
      upperLimit: int
    ): int;
    /**
     * Creates a hash code for a {@link sap.ui.vtm.Matrix} value.
     *
     * The resulting hash value can be any integer value. Use {@link sap.ui.vtm.HashUtilities.normalizeHash}
     * on the result to create a hash code that is useful as a key in a {@link sap.ui.vtm.Lookup}.
     */
    hashMatrix(
      /**
       * The matrix to hash.
       */
      vtmMatrix: Matrix
    ): int;
    /**
     * Creates a hash code for a string.
     *
     * The resulting hash value can be any integer value. Use {@link sap.ui.vtm.HashUtilities.normalizeHash}
     * on the result to create a hash code that is useful as a key in a {@link sap.ui.vtm.Lookup}.
     */
    hashString(
      /**
       * The string to hash.
       */
      stringToHash: string
    ): int;
    /**
     * Normalizes a hash code to a range between 0 and an upper bound. Useful for creating a hash code that
     * can be used as a key in a {@link sap.ui.vtm.Lookup} (to limit the number of buckets in the lookup).
     */
    normalizeHash(
      /**
       * A hash code to normalize.
       */
      hashValue: int,
      /**
       * An upper bound for the hash code value. Defaults to 50000.
       */
      upperLimit: int
    ): int;
  }
  const HashUtilities: HashUtilities;
  export default HashUtilities;
}

declare module "sap/ui/vtm/InternalColumnDescriptor" {
  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * Enumeration specifying descriptors for {@link sap.ui.vtm.Column} objects of type {@link sap.ui.vtm.ColumnType.Internal}.
   */
  enum InternalColumnDescriptor {
    /**
     * A column showing the `absoluteMatrix` field of the tree item.
     */
    AbsoluteMatrix = "AbsoluteMatrix",
    /**
     * A column showing the `highlightColor` field of the tree item.
     */
    HighlightColor = "HighlightColor",
    /**
     * The column that is used to provide an indication of the messages that apply to the tree item and its
     * descendants.
     */
    MessageStatus = "MessageStatus",
    /**
     * A column showing the `opacity` field of the tree item.
     */
    Opacity = "Opacity",
    /**
     * A column showing the `relativeMatrix` field of the tree item.
     */
    RelativeMatrix = "RelativeMatrix",
    /**
     * A column showing the `sceneNodeIds` field of the tree item.
     */
    SceneNodeIds = "SceneNodeIds",
    /**
     * The column that contains the tree item name and the tree type icon. This must always be the first column.
     */
    Tree = "Tree",
    /**
     * A column containing the `id` field of the tree item.
     */
    TreeItemId = "TreeItemId",
    /**
     * The column that is used to indicate and control visibility of the scene nodes associated with the tree
     * item.
     */
    Visibility = "Visibility",
  }
  export default InternalColumnDescriptor;
}

declare module "sap/ui/vtm/InternalColumns" {
  import Column from "sap/ui/vtm/Column";

  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * A set of utility functions for creating internal tree columns.
   */
  interface InternalColumns {
    /**
     * Creates a {@link sap.ui.vtm.InternalColumnDescriptor.AbsoluteMatrix} column.
     */
    createAbsoluteMatrixColumn(): Column;
    /**
     * Creates a {@link sap.ui.vtm.InternalColumnDescriptor.MessageStatus} internal column.
     */
    createMessageStatusColumn(): Column;
    /**
     * Creates an {@link sap.ui.vtm.InternalColumnDescriptor.Opacity} column.
     */
    createOpacityColumn(): Column;
    /**
     * Creates a {@link sap.ui.vtm.InternalColumnDescriptor.RelativeMatrix} column.
     */
    createRelativeMatrixColumn(): Column;
    /**
     * Creates a {@link sap.ui.vtm.InternalColumnDescriptor.SceneNodeIds} column.
     */
    createSceneNodeIdsColumn(): Column;
    /**
     * Creates a {@link sap.ui.vtm.InternalColumnDescriptor.Tree} internal column.
     */
    createTreeColumn(): Column;
    /**
     * Creates a {@link sap.ui.vtm.InternalColumnDescriptor.TreeItemId} column.
     */
    createTreeItemIdColumn(): Column;
    /**
     * Creates a {@link sap.ui.vtm.InternalColumnDescriptor.Visibility} internal column.
     */
    createVisibilityColumn(): Column;
  }
  const InternalColumns: InternalColumns;
  export default InternalColumns;
}

declare module "sap/ui/vtm/Lookup" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * A map that can contain multiple values per key value. This is a utility class that can be used as a data
   * structure for:
   * 	 - Maintaining a lookup containing scene nodes keyed by a particular value in order to determine the
   * 			scene nodes that should be associated with a particular tree item
   * 	 - Maintaining lookups (one for each tree) of tree items keyed by a particular value in order to determine
   * 			the tree items in one tree that are associated with tree items in another tree  A typical usage
   * 			would be to use a {@link sap.ui.vtm.Lookup} that is keyed using a hash code constructed from some or
   * 			all of the information needed to match a particular tree item or scene node. In this scenario the {@link
   * 			sap.ui.vtm.Lookup} is used to return a set of possible matches which are then filtered to find the actual
   * 			matches. The usage of the {@link sap.ui.vtm.Lookup} with a suitable key can drastically reduces the number
   * 			of items that need to be compared when performing a search. This is important when there are large numbers
   * 			of searches that need to be performed within a large set of items.
   */
  export default class Lookup extends UI5Element {
    /**
     * Constructor for a new Lookup.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * A function to compare two values for equality (takes two values as parameters and returns true if they
       * are equal).
       */
      equalsFunc: Function
    );

    /**
     * Adds a value to the set of values stored against a given key.
     */
    addValue(
      /**
       * The key.
       */
      key: any,
      /**
       * The value.
       */
      value: any
    ): Lookup;
    /**
     * Clears the Lookup.
     */
    clear(): Lookup;
    /**
     * Creates a new subclass of class sap.ui.vtm.Lookup with name `sClassName` and enriches it with the information
     * contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, Lookup>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Loops over the key/value array pairs calling the callback function for each pair.
     */
    forEach(
      /**
       * The callback function to call for each key/value array pair. The first argument to the callback function
       * is the value array and the second parameter is the key.
       */
      callback: Function
    ): Lookup;
    /**
     * Returns a metadata object for class sap.ui.vtm.Lookup.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets the values stored against a given key.
     */
    getValues(
      /**
       * The key to use to index the Lookup.
       */
      key: any
    ): any[];
    /**
     * Returns whether there are any values stored against the given key.
     */
    hasValue(
      /**
       * The key.
       */
      key: any
    ): boolean;
    /**
     * Removes a particular value.
     */
    removeValue(
      /**
       * The key.
       */
      key: any,
      /**
       * The value.
       */
      value: any,
      /**
       * A function to compare two values for equality (takes two values as parameters and returns true if they
       * are equal).
       */
      equalsFunc: Function
    ): Lookup;
  }

  export interface $LookupSettings extends $ElementSettings {}
}

declare module "sap/ui/vtm/MatrixUtilities" {
  import { Matrix } from "sap/ui/vtm/library";

  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * A set of utility functions for working with transformation matrices in a ISO 10303-42 format (in the
   * form of a 1 dimensional array of 13 numbers)
   */
  interface MatrixUtilities {
    /**
     * Returns true when the two matrix parameters are equal.
     */
    areEqual(
      /**
       * One matrix to compare.
       */
      vtmMatrixA: Matrix,
      /**
       * The other matrix to compare.
       */
      vtmMatrixB: Matrix
    ): boolean;
    /**
     * Returns an identity transformation matrix.
     */
    createIdentity(): Matrix;
    /**
     * Converts a 4x4 transformation matrix to a {@link sap.ui.vtm.Matrix}.
     */
    from4x4Matrix(
      /**
       * The 4x4 matrix (represented as an array of arrays of numbers) to convert.
       */
      mat4x4: number[]
    ): Matrix;
    /**
     * Converts a {@link sap.ui.vk.TransformationMatrix} (as used by the sap.ui.vk library) to a {@link sap.ui.vtm.Matrix}
     * value.
     */
    fromVkMatrix(
      /**
       * The VIT transformation matrix.
       */
      vkMatrix: /* was: sap.ui.vk.TransformationMatrix */ any
    ): Matrix;
    /**
     * Converts a VSM transformation matrix string to a {@link sap.ui.vtm.Matrix} value.
     */
    fromVsmMatrixString(
      /**
       * The VSM transformation matrix string.
       */
      vsmMatrixString: string
    ): Matrix;
    /**
     * Returns the inverse of the passed matrix without modifying the passed matrix.
     */
    invert(
      /**
       * The matrix to invert.
       */
      vtmMatrix: Matrix
    ): Matrix;
    /**
     * Returns whether a matrix is invertible.
     */
    isInvertible(
      /**
       * The matrix to check.
       */
      vtmMatrix: Matrix
    ): boolean;
    /**
     * Returns true if the parameter represents a valid transformation matrix.
     */
    isValid(
      /**
       * The transformation matrix to check.
       */
      vtmMatrix: Matrix,
      /**
       * Checks whether the matrix is invertible.
       *  Matrices must be invertible to be used as transformation matrices.
       *  This check is optional due to the additional cost of performing it.
       */
      checkInvertibility: boolean
    ): boolean;
    /**
     * Returns the result of multiplying two matrices (without modifying the passed matrices).
     */
    multiply(
      /**
       * One multiplicand.
       */
      vtmMatrixA: Matrix,
      /**
       * The other multiplicand.
       */
      vtmMatrixB: Matrix
    ): Matrix;
    /**
     * Converts a {@link sap.ui.vtm.Matrix} to a 4x4 transformation matrix.
     */
    to4x4Matrix(
      /**
       * The {@link sap.ui.vtm.Matrix} value to convert.
       */
      vtmMatrix: Matrix
    ): number[];
    /**
     * Converts a {@link sap.ui.vtm.Matrix} value to a {@link sap.ui.vk.TransformationMatrix} as used by the
     * sap.ui.vk library.
     */
    toVkMatrix(
      /**
       * The {@link sap.ui.vtm.Matrix} value
       */
      vtmMatrix: Matrix
    ): /* was: sap.ui.vk.TransformationMatrix */ any;
    /**
     * Converts a {@link sap.ui.vtm.Matrix} value to a VSM transformation matrix string.
     */
    toVsmMatrixString(
      /**
       * The {@link sap.ui.vtm.Matrix} value.
       */
      vtmMatrix: Matrix
    ): string;
  }
  const MatrixUtilities: MatrixUtilities;
  export default MatrixUtilities;
}

declare module "sap/ui/vtm/MessagesPopover" {
  import { default as Popover, $PopoverSettings } from "sap/m/Popover";

  import { CSSSize } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * A control that can be used to show messages applied to a tree item.
   */
  export default class MessagesPopover extends Popover {
    /**
     * Constructor for a new MessagesPopover.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor();

    /**
     * Creates a new subclass of class sap.ui.vtm.MessagesPopover with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.m.Popover.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, MessagesPopover>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets current value of property {@link #getMaxHeight maxHeight}.
     *
     * Maximum height of status window.
     */
    getMaxHeight(): CSSSize;
    /**
     * Gets current value of property {@link #getMessages messages}.
     *
     * The set of {@link sap.ui.core.Message} objects to display.
     *
     * Only the following properties of each message will be used:
     * 	 - `level`
     * 	 - `text`
     * 	 - `icon`
     */
    getMessages(): object[];
    /**
     * Returns a metadata object for class sap.ui.vtm.MessagesPopover.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Sets a new value for property {@link #getMaxHeight maxHeight}.
     *
     * Maximum height of status window.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setMaxHeight(
      /**
       * New value for property `maxHeight`
       */
      sMaxHeight?: CSSSize
    ): this;
    /**
     * Sets a new value for property {@link #getMessages messages}.
     *
     * The set of {@link sap.ui.core.Message} objects to display.
     *
     * Only the following properties of each message will be used:
     * 	 - `level`
     * 	 - `text`
     * 	 - `icon`
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setMessages(
      /**
       * New value for property `messages`
       */
      sMessages: object[]
    ): this;
  }

  export interface $MessagesPopoverSettings extends $PopoverSettings {
    /**
     * The set of {@link sap.ui.core.Message} objects to display.
     *
     * Only the following properties of each message will be used:
     * 	 - `level`
     * 	 - `text`
     * 	 - `icon`
     */
    messages?: object[] | PropertyBindingInfo;

    /**
     * Maximum height of status window.
     */
    maxHeight?: CSSSize | PropertyBindingInfo;
  }
}

declare module "sap/ui/vtm/Panel" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { CSSSize, ID } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import Tree from "sap/ui/vtm/Tree";

  import Viewport from "sap/ui/vtm/Viewport";

  import Vtm from "sap/ui/vtm/Vtm";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * A control that represents a VTM panel. Contains:
   * 	 - A header area containing a title and optionally a set of application controls
   * 	 - A sap.ui.vtm.Tree and a sap.ui.vtm.Viewport separated by a splitter
   */
  export default class Panel extends Control {
    /**
     * Constructor for a new Panel.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * id for the new {@link sap.ui.vtm.Panel} instance.
       */
      sId: string,
      /**
       * Object with initial property values, aggregated objects etc. for the new {@link sap.ui.vtm.Panel} instance.
       *  The `vtmId` association needs to be set in order for the panel to be associated with a {@link sap.ui.vtm.Vtm}
       * instance.
       *  {@link sap.ui.vtm.Vtm#createPanel createPanel} creates a {@link sap.ui.vtm.Panel} instance and populates
       * the `vtmId` association.
       */
      mSettings: $PanelSettings
    );

    /**
     * Adds some titleControl to the aggregation {@link #getTitleControls titleControls}.
     */
    addTitleControl(
      /**
       * The titleControl to add; if empty, nothing is inserted
       */
      oTitleControl: Control
    ): this;
    /**
     * Adds some treeHeaderControl to the aggregation {@link #getTreeHeaderControls treeHeaderControls}.
     */
    addTreeHeaderControl(
      /**
       * The treeHeaderControl to add; if empty, nothing is inserted
       */
      oTreeHeaderControl: Control
    ): this;
    /**
     * Adds some viewportHeaderControl to the aggregation {@link #getViewportHeaderControls viewportHeaderControls}.
     */
    addViewportHeaderControl(
      /**
       * The viewportHeaderControl to add; if empty, nothing is inserted
       */
      oViewportHeaderControl: Control
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:contextMenu contextMenu} event of this `sap.ui.vtm.Panel`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Panel` itself.
     *
     * Raised when the web browser `contextmenu` event is raised. To prevent the default browser context menu
     * from being shown call preventDefault() on the event.
     */
    attachContextMenu(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Panel` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:initialized initialized} event of this `sap.ui.vtm.Panel`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Panel` itself.
     *
     * Raised when the panel is initialized.
     */
    attachInitialized(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Panel` itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys all the titleControls in the aggregation {@link #getTitleControls titleControls}.
     */
    destroyTitleControls(): this;
    /**
     * Destroys all the treeHeaderControls in the aggregation {@link #getTreeHeaderControls treeHeaderControls}.
     */
    destroyTreeHeaderControls(): this;
    /**
     * Destroys all the viewportHeaderControls in the aggregation {@link #getViewportHeaderControls viewportHeaderControls}.
     */
    destroyViewportHeaderControls(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:contextMenu contextMenu} event of this `sap.ui.vtm.Panel`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachContextMenu(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:initialized initialized} event of this `sap.ui.vtm.Panel`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachInitialized(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Creates a new subclass of class sap.ui.vtm.Panel with name `sClassName` and enriches it with the information
     * contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, Panel>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Fires event {@link #event:contextMenu contextMenu} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     */
    fireContextMenu(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The X coordinate of the mouse pointer in local (DOM content) coordinates.
         */
        clientX?: int;
        /**
         * The Y coordinate of the mouse pointer in local (DOM content) coordinates.
         */
        clientY?: int;
        /**
         * The X coordinate of the mouse pointer in page coordinates.
         */
        pageX?: int;
        /**
         * The X coordinate of the mouse pointer in page coordinates.
         */
        pageY?: int;
        /**
         * The X coordinate of the mouse pointer in screen coordinates.
         */
        screenX?: int;
        /**
         * The X coordinate of the mouse pointer in screen coordinates.
         */
        screenY?: int;
        /**
         * The jQuery event object.
         */
        eventData?: object;
      }
    ): boolean;
    /**
     * Fires event {@link #event:initialized initialized} to attached listeners.
     */
    fireInitialized(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Gets current value of property {@link #getHeight height}.
     *
     * The height of the panel.
     *
     * Default value is `"inherit"`.
     */
    getHeight(): CSSSize;
    /**
     * Gets whether this is the active {@link sap.ui.vtm.Panel}.
     */
    getIsActive(): boolean;
    /**
     * Returns a metadata object for class sap.ui.vtm.Panel.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getShowViewport showViewport}.
     *
     * Controls whether the viewport will be shown for this panel.
     *
     * Default value is `true`.
     */
    getShowViewport(): boolean;
    /**
     * Gets current value of property {@link #getTitle title}.
     *
     * The text to show in the title bar for this panel.
     */
    getTitle(): string;
    /**
     * Gets content of aggregation {@link #getTitleControls titleControls}.
     *
     * The set of controls to render in the title bar area.
     */
    getTitleControls(): Control[];
    /**
     * Gets the tree owned by this panel.
     */
    getTree(): Tree;
    /**
     * Gets content of aggregation {@link #getTreeHeaderControls treeHeaderControls}.
     *
     * The set of controls to render in the tree header area.
     */
    getTreeHeaderControls(): Control[];
    /**
     * Gets current value of property {@link #getTreeWidth treeWidth}.
     *
     * The width of the tree.
     *
     * Default value is `"50%"`.
     */
    getTreeWidth(): CSSSize;
    /**
     * Gets the viewport owned by this panel.
     */
    getViewport(): Viewport;
    /**
     * Gets content of aggregation {@link #getViewportHeaderControls viewportHeaderControls}.
     *
     * The set of controls to render in the viewport header area.
     */
    getViewportHeaderControls(): Control[];
    /**
     * Gets the {@link sap.ui.vtm.Vtm} instance that owns this panel.
     */
    getVtm(): Vtm;
    /**
     * ID of the element which is the current target of the association {@link #getVtmId vtmId}, or `null`.
     */
    getVtmId(): ID;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getTitleControls titleControls}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfTitleControl(
      /**
       * The titleControl whose index is looked for
       */
      oTitleControl: Control
    ): int;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getTreeHeaderControls treeHeaderControls}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfTreeHeaderControl(
      /**
       * The treeHeaderControl whose index is looked for
       */
      oTreeHeaderControl: Control
    ): int;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getViewportHeaderControls viewportHeaderControls}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfViewportHeaderControl(
      /**
       * The viewportHeaderControl whose index is looked for
       */
      oViewportHeaderControl: Control
    ): int;
    /**
     * Inserts a titleControl into the aggregation {@link #getTitleControls titleControls}.
     */
    insertTitleControl(
      /**
       * The titleControl to insert; if empty, nothing is inserted
       */
      oTitleControl: Control,
      /**
       * The `0`-based index the titleControl should be inserted at; for a negative value of `iIndex`, the titleControl
       * is inserted at position 0; for a value greater than the current size of the aggregation, the titleControl
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a treeHeaderControl into the aggregation {@link #getTreeHeaderControls treeHeaderControls}.
     */
    insertTreeHeaderControl(
      /**
       * The treeHeaderControl to insert; if empty, nothing is inserted
       */
      oTreeHeaderControl: Control,
      /**
       * The `0`-based index the treeHeaderControl should be inserted at; for a negative value of `iIndex`, the
       * treeHeaderControl is inserted at position 0; for a value greater than the current size of the aggregation,
       * the treeHeaderControl is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a viewportHeaderControl into the aggregation {@link #getViewportHeaderControls viewportHeaderControls}.
     */
    insertViewportHeaderControl(
      /**
       * The viewportHeaderControl to insert; if empty, nothing is inserted
       */
      oViewportHeaderControl: Control,
      /**
       * The `0`-based index the viewportHeaderControl should be inserted at; for a negative value of `iIndex`,
       * the viewportHeaderControl is inserted at position 0; for a value greater than the current size of the
       * aggregation, the viewportHeaderControl is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getTitleControls titleControls}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllTitleControls(): Control[];
    /**
     * Removes all the controls from the aggregation {@link #getTreeHeaderControls treeHeaderControls}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllTreeHeaderControls(): Control[];
    /**
     * Removes all the controls from the aggregation {@link #getViewportHeaderControls viewportHeaderControls}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllViewportHeaderControls(): Control[];
    /**
     * Removes a titleControl from the aggregation {@link #getTitleControls titleControls}.
     */
    removeTitleControl(
      /**
       * The titleControl to remove or its index or id
       */
      vTitleControl: int | string | Control
    ): Control;
    /**
     * Removes a treeHeaderControl from the aggregation {@link #getTreeHeaderControls treeHeaderControls}.
     */
    removeTreeHeaderControl(
      /**
       * The treeHeaderControl to remove or its index or id
       */
      vTreeHeaderControl: int | string | Control
    ): Control;
    /**
     * Removes a viewportHeaderControl from the aggregation {@link #getViewportHeaderControls viewportHeaderControls}.
     */
    removeViewportHeaderControl(
      /**
       * The viewportHeaderControl to remove or its index or id
       */
      vViewportHeaderControl: int | string | Control
    ): Control;
    /**
     * Sets a new value for property {@link #getHeight height}.
     *
     * The height of the panel.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"inherit"`.
     */
    setHeight(
      /**
       * New value for property `height`
       */
      sHeight?: CSSSize
    ): this;
    /**
     * Sets a new value for property {@link #getShowViewport showViewport}.
     *
     * Controls whether the viewport will be shown for this panel.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setShowViewport(
      /**
       * New value for property `showViewport`
       */
      bShowViewport?: boolean
    ): this;
    /**
     * Sets the panel title.
     */
    setTitle(
      /**
       * The panel title text
       */
      title: string
    ): Panel;
    /**
     * Sets a new value for property {@link #getTreeWidth treeWidth}.
     *
     * The width of the tree.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"50%"`.
     */
    setTreeWidth(
      /**
       * New value for property `treeWidth`
       */
      sTreeWidth?: CSSSize
    ): this;
    /**
     * Sets the associated {@link #getVtmId vtmId}.
     */
    setVtmId(
      /**
       * ID of an element which becomes the new target of this vtmId association; alternatively, an element instance
       * may be given
       */
      oVtmId: ID | Vtm
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:contextMenu contextMenu} event of this `sap.ui.vtm.Panel`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Panel` itself.
     *
     * Raised when the web browser `contextmenu` event is raised. To prevent the default browser context menu
     * from being shown call preventDefault() on the event.
     */
    attachContextMenu(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Panel` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:initialized initialized} event of this `sap.ui.vtm.Panel`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Panel` itself.
     *
     * Raised when the panel is initialized.
     */
    attachInitialized(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Panel` itself
       */
      oListener?: object
    ): this;
  }

  export interface $PanelSettings extends $ControlSettings {
    /**
     * The text to show in the title bar for this panel.
     */
    title?: string | PropertyBindingInfo;

    /**
     * Controls whether the viewport will be shown for this panel.
     */
    showViewport?: boolean | PropertyBindingInfo;

    /**
     * The width of the tree.
     */
    treeWidth?: CSSSize | PropertyBindingInfo;

    /**
     * The height of the panel.
     */
    height?: CSSSize | PropertyBindingInfo;

    /**
     * The set of controls to render in the title bar area.
     */
    titleControls?: Control[] | Control | AggregationBindingInfo;

    /**
     * The set of controls to render in the tree header area.
     */
    treeHeaderControls?: Control[] | Control | AggregationBindingInfo;

    /**
     * The set of controls to render in the viewport header area.
     */
    viewportHeaderControls?: Control[] | Control | AggregationBindingInfo;

    /**
     * The {@link sap.ui.vtm.Vtm} instance this panel is associated with.
     */
    vtmId?: Vtm | string;

    /**
     * Raised when the panel is initialized.
     */
    initialized?: Function;

    /**
     * Raised when the web browser `contextmenu` event is raised. To prevent the default browser context menu
     * from being shown call preventDefault() on the event.
     */
    contextMenu?: Function;
  }
}

declare module "sap/ui/vtm/PredefinedView" {
  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * Enumeration specifying predefined views.
   */
  enum PredefinedView {
    /**
     * The view from the back.
     */
    Back = "undefined",
    /**
     * The view from the bottom.
     */
    Bottom = "undefined",
    /**
     * The view from the front.
     */
    Front = "undefined",
    /**
     * The view from the left.
     */
    Left = "undefined",
    /**
     * The view from the right.
     */
    Right = "undefined",
    /**
     * The view from the top.
     */
    Top = "undefined",
  }
  export default PredefinedView;
}

declare module "sap/ui/vtm/ProgressDialog" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import Scene from "sap/ui/vtm/Scene";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * A progress control to show viewable download and load progress.
   */
  export default class ProgressDialog extends Control {
    /**
     * Constructor for a new ProgressDialog.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * The scene that is being used to load viewables.
       */
      scene: Scene
    );

    /**
     * Closes the dialog.
     */
    close(): ProgressDialog;
    /**
     * Creates a new subclass of class sap.ui.vtm.ProgressDialog with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, ProgressDialog>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.vtm.ProgressDialog.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getPercentComplete percentComplete}.
     *
     * The percentage (0-100) to show in the progress bar (if visible).
     *
     * Default value is `0`.
     */
    getPercentComplete(): int;
    /**
     * Gets current value of property {@link #getProgressBarVisible progressBarVisible}.
     *
     * Whether the progress bar is visible.
     *
     * Default value is `"true"`.
     */
    getProgressBarVisible(): boolean;
    /**
     * Gets current value of property {@link #getProgressText progressText}.
     *
     * The text to display in the progress dialog.
     */
    getProgressText(): string;
    /**
     * Returns whether the dialog is open.
     */
    isOpen(): boolean;
    /**
     * Opens the dialog.
     */
    open(): ProgressDialog;
    /**
     * Sets a new value for property {@link #getPercentComplete percentComplete}.
     *
     * The percentage (0-100) to show in the progress bar (if visible).
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     */
    setPercentComplete(
      /**
       * New value for property `percentComplete`
       */
      iPercentComplete?: int
    ): this;
    /**
     * Sets a new value for property {@link #getProgressBarVisible progressBarVisible}.
     *
     * Whether the progress bar is visible.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"true"`.
     */
    setProgressBarVisible(
      /**
       * New value for property `progressBarVisible`
       */
      bProgressBarVisible?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getProgressText progressText}.
     *
     * The text to display in the progress dialog.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setProgressText(
      /**
       * New value for property `progressText`
       */
      sProgressText: string
    ): this;
  }

  export interface $ProgressDialogSettings extends $ControlSettings {
    /**
     * The text to display in the progress dialog.
     */
    progressText?: string | PropertyBindingInfo;

    /**
     * The percentage (0-100) to show in the progress bar (if visible).
     */
    percentComplete?: int | PropertyBindingInfo;

    /**
     * Whether the progress bar is visible.
     */
    progressBarVisible?: boolean | PropertyBindingInfo;
  }
}

declare module "sap/ui/vtm/Scene" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import ViewableLoadInfo from "sap/ui/vtm/ViewableLoadInfo";

  import Viewable from "sap/ui/vtm/Viewable";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import Vtm from "sap/ui/vtm/Vtm";

  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * Allows access to scene nodes in the scene. A single {@link sap.ui.vtm.Scene} is shared by the {@link
   * sap.ui.vtm.Viewport} objects in all the {@link sap.ui.vtm.Panel} objects associated with a {@link sap.ui.vtm.Vtm}
   * instance. Visibility, selection, highlighting and opacity can be controlled for each scene node separately
   * in each {@link sap.ui.vtm.Viewport}.
   */
  export default class Scene extends UI5Element {
    /**
     * This class is not intended to be directly instantiated by application code. A {@link sap.ui.vtm.Scene}
     * object is created when a {@link sap.ui.vtm.Vtm} object is created.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor();

    /**
     * Attaches event handler `fnFunction` to the {@link #event:downloadCompleted downloadCompleted} event of
     * this `sap.ui.vtm.Scene`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Scene` itself.
     *
     * Raised when viewables have been downloaded (successfully or unsuccessfully) as a result of a call to
     * {@link #loadViewablesAsync}.
     *
     * If no viewables have been successfully downloaded, none of the viewables will be loaded, so no subsequent
     * {@link sap.ui.vtm.Scene.loadStarted}, {@link sap.ui.vtm.Scene.loadProgress} or {@link sap.ui.vtm.Scene.loadCompleted}
     * will occur as a result of the call to {@link #loadViewablesAsync} that resulted in the {@link sap.ui.vtm.Scene.downloadCompleted}
     * event being raised.
     */
    attachDownloadCompleted(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Scene` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:downloadProgress downloadProgress} event of
     * this `sap.ui.vtm.Scene`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Scene` itself.
     *
     * Raised to indicate download progress of a viewable while viewables are being downloaded
     */
    attachDownloadProgress(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Scene` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:downloadStarted downloadStarted} event of this
     * `sap.ui.vtm.Scene`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Scene` itself.
     *
     * Raised when starting a download of a set of viewables.
     */
    attachDownloadStarted(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Scene` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:hierarchyChanged hierarchyChanged} event of
     * this `sap.ui.vtm.Scene`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Scene` itself.
     *
     * Raised when the scene hierarchy has been modified.
     */
    attachHierarchyChanged(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Scene` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:loadCompleted loadCompleted} event of this `sap.ui.vtm.Scene`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Scene` itself.
     *
     * Raised when all viewables specified in a call to {@link #loadViewablesAsync} have either loaded or failed
     * to load.
     */
    attachLoadCompleted(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Scene` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:loadProgress loadProgress} event of this `sap.ui.vtm.Scene`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Scene` itself.
     *
     * Raised to provide progress information for a viewable that is being loaded.
     */
    attachLoadProgress(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Scene` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:loadStarted loadStarted} event of this `sap.ui.vtm.Scene`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Scene` itself.
     *
     * Raised when starting to load a set of viewables.
     */
    attachLoadStarted(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Scene` itself
       */
      oListener?: object
    ): this;
    /**
     * Clones a scene node.
     */
    cloneNode(
      /**
       * The ID of the node to clone.
       */
      nodeIdToClone: string,
      /**
       * The ID of the node that will be the parent of the created node. If `null` the newly created node is a
       * top level node.
       */
      parentNodeId: string,
      /**
       * The created node is added before this specified node. If `null` the newly created node is added at the
       * end of the parent's list of nodes.
       */
      insertBeforeNodeId: string,
      /**
       * The name of the new node.
       */
      name: string,
      /**
       * If `true`, the descendants of the scene node will also be cloned. Defaults to `true`.
       */
      recursive: boolean
    ): string;
    /**
     * Creates a scene node.
     */
    createNode(
      /**
       * The ID of the node that will be the parent of the created node. If `null` the newly created node is a
       * top level node.
       */
      parentNodeId: string,
      /**
       * The created node is added before this specified node. If `null` the newly created node is added at the
       * end of the parent's list of nodes.
       */
      insertBeforeNodeId: string,
      /**
       * The name of the new node.
       */
      name: string
    ): string;
    /**
     * Deletes a node from the scene.
     */
    deleteNode(
      /**
       * The ID of the node to delete.
       */
      nodeId: string
    ): Scene;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:downloadCompleted downloadCompleted} event
     * of this `sap.ui.vtm.Scene`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachDownloadCompleted(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:downloadProgress downloadProgress} event of
     * this `sap.ui.vtm.Scene`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachDownloadProgress(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:downloadStarted downloadStarted} event of
     * this `sap.ui.vtm.Scene`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachDownloadStarted(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:hierarchyChanged hierarchyChanged} event of
     * this `sap.ui.vtm.Scene`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachHierarchyChanged(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:loadCompleted loadCompleted} event of this
     * `sap.ui.vtm.Scene`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachLoadCompleted(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:loadProgress loadProgress} event of this `sap.ui.vtm.Scene`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachLoadProgress(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:loadStarted loadStarted} event of this `sap.ui.vtm.Scene`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachLoadStarted(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Creates a new subclass of class sap.ui.vtm.Scene with name `sClassName` and enriches it with the information
     * contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, Scene>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Fires event {@link #event:downloadCompleted downloadCompleted} to attached listeners.
     */
    fireDownloadCompleted(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * A set of {@link sap.ui.vtm.ViewableLoadInfo} objects that describe the status of each {@link sap.ui.vtm.Viewable}
         * passed to the {@link #loadViewablesAsync} call.
         */
        viewableLoadInfos?: ViewableLoadInfo[];
        /**
         * The set of viewables that were downloaded successfully in the call to {@link #loadViewablesAsync} that
         * resulted in this event being raised.
         */
        downloadedViewables?: Viewable[];
      }
    ): this;
    /**
     * Fires event {@link #event:downloadProgress downloadProgress} to attached listeners.
     */
    fireDownloadProgress(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The viewable that is being downloaded.
         */
        viewable?: Viewable;
        /**
         * The number of bytes that have been downloaded.
         */
        downloadedBytes?: int;
        /**
         * The total number of bytes that need to be downloaded.
         */
        totalBytes?: int;
      }
    ): this;
    /**
     * Fires event {@link #event:downloadStarted downloadStarted} to attached listeners.
     */
    fireDownloadStarted(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * A set of {@link sap.ui.vtm.ViewableLoadInfo} objects that describe the status of each {@link sap.ui.vtm.Viewable}
         * passed to the {@link #loadViewablesAsync} call.
         */
        viewableLoadInfos?: ViewableLoadInfo[];
      }
    ): this;
    /**
     * Fires event {@link #event:hierarchyChanged hierarchyChanged} to attached listeners.
     */
    fireHierarchyChanged(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:loadCompleted loadCompleted} to attached listeners.
     */
    fireLoadCompleted(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Indicates whether the scene was built/updated successfully. It is possible that this can be `false` when
         * all the content resources apparently loaded successfully.
         */
        succeeeded?: boolean;
        /**
         * A set of {@link sap.ui.vtm.ViewableLoadInfo} objects that describe the status of each {@link sap.ui.vtm.Viewable}
         * passed to the {@link #loadViewablesAsync} call.
         */
        viewableLoadInfos?: ViewableLoadInfo[];
        /**
         * The set of viewables that were loaded successfully in the call to {@link #loadViewablesAsync} that resulted
         * in this event being raised.
         */
        loadedViewables?: Viewable[];
      }
    ): this;
    /**
     * Fires event {@link #event:loadProgress loadProgress} to attached listeners.
     */
    fireLoadProgress(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:loadStarted loadStarted} to attached listeners.
     */
    fireLoadStarted(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * A set of {@link sap.ui.vtm.ViewableLoadInfo} objects that describe the status of each {@link sap.ui.vtm.Viewable}
         * passed to the {@link #loadViewablesAsync} call.
         */
        viewableLoadInfos?: ViewableLoadInfo[];
      }
    ): this;
    /**
     * Gets the scene node IDs of all the scene nodes in the scene.
     */
    getAllIds(): string[];
    /**
     * Gets the scene node IDs of the ancestors of the specified scene node. The root scene node is the first
     * item in the array and the parent is the last.
     */
    getAncestorIds(
      /**
       * The scene node to find the ancestors of.
       */
      sceneNodeId: string
    ): string[];
    /**
     * Gets set of all scene node IDs in the scene that have been discovered via scene traversal performed by
     * the application.
     *
     * Accurate population of this value requires application support (whereas {@link #getAllIds} always returns
     * the exact set of all scene nodes in the scene).
     *
     * Scene node IDs are added to this set as they are discovered through methods the application calls:
     *
     * 	 - {@link #getAllIds}
     * 	 - {@link #getRootIds}
     * 	 - {@link #getParentIds}
     * 	 - {@link #getAncestorIds}
     * 	 - {@link #getChildIds}
     * 	 - {@link #getDescendantIds}
     *
     * The methods above are also used by the following methods:
     * 	 - {@link #traverseTree}
     * 	 - {@link #traverseBranch}
     *
     * All of the scene nodes that have been traversed by these traversal methods will be included in the cached
     * set. If during a call to {@link #traverseTree} or {@link #traverseBranch} the application stops traversal
     * of a particular branch of the scene tree by returning `false` in the callback for a particular scene
     * node, the application can call {@link #getDescendantIds} for that scene node to ensure that all the scene
     * node IDs for the descendants of that scene node are included in the set of cached IDs.
     *
     * Scene nodes are also added/removed from the to the cached set as required when the following methods
     * are called:
     * 	 - {@link #createNode}
     * 	 - {@link #cloneNode}
     * 	 - {@link #deleteNode}
     *
     * If this method is called before any scene traversal has occurred, it populates the set of cached scene
     * node IDs using {@link #getAllIds}.
     */
    getCachedIds(): string[];
    /**
     * Gets the scene node IDs of the children of the specified scene node.
     */
    getChildIds(
      /**
       * The scene node to find the children of.
       */
      sceneNodeId: string
    ): string[];
    /**
     * Gets the scene node IDs of the descendants of the specified scene node.
     */
    getDescendantIds(
      /**
       * The scene node to find the descendants of.
       */
      sceneNodeId: string
    ): string[];
    /**
     * Gets the set of downloaded viewables.
     */
    getDownloadedViewables(): Viewable[];
    /**
     * Gets the set of loaded viewables.
     */
    getLoadedViewables(): Viewable[];
    /**
     * Returns a metadata object for class sap.ui.vtm.Scene.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets the scene node ID of the parent node of the specified scene node or null if the specified scene
     * node is a root scene node.
     */
    getParentId(
      /**
       * The scene node to find the parent of.
       */
      sceneNodeId: string
    ): string | null;
    /**
     * Gets the IDs of the the root scene nodes.
     */
    getRootIds(): string[];
    /**
     * Gets the set of {@link sap.ui.vtm.ViewableLoadInfo} objects that describe the status of each {@link sap.ui.vtm.Viewable}
     * that has been passed to a {@link #loadViewablesAsyc} call made on this {@link sap.ui.vtm.Scene} instance.
     */
    getViewableLoadInfos(): ViewableLoadInfo[];
    /**
     * Gets the {@link sap.ui.vtm.Vtm} instance that owns this scene.
     */
    getVtm(): Vtm;
    /**
     * Load a set of viewables asynchronously. Progress is indicated by the `progress` event and completion
     * is indicated by the `loadComplete` event.
     */
    loadViewablesAsync(
      /**
       * The set of viewables to load.
       */
      viewables: Viewable | Viewable[]
    ): Scene;
    /**
     * Recursively traverses a scene tree branch calling a function on each scene node.
     *
     * Does not traverse the descendants of closed nodes.
     */
    traverseBranch(
      /**
       * The ID of the scene node that represents the root of the branch to traverse.
       */
      sceneNodeId: string,
      /**
       * The function to apply to the traversed scene nodes.
       *  The first parameter to the callback function is of type {@link sap.ui.vtm.SceneNode}.
       *  The second parameter to the callback function is an array of IDs of ancestors of the scene node being
       * processed.
       *  When the function returns `false`, the descendants of the scene node passed as the parameter are not
       * traversed.
       */
      callback: Function
    ): Scene;
    /**
     * Traverses a set of scene nodes specified by scene node ID, calling a function on each scene node.
     */
    traverseNodes(
      /**
       * The IDs of the scene nodes to traverse.
       */
      sceneNodeIds: string | string[],
      /**
       * The function to apply to the traversed scene nodes.
       *  The function takes two parameters.
       *  The first parameter to the function is of type {@link sap.ui.vtm.SceneNode}. The second parameter to
       * the function is the zero based index of the current scene node in the traversal. Traversal stops if the
       * function returns `false`.
       */
      callback: Function
    ): Scene;
    /**
     * Recursively traverses the scene tree calling a function on each scene node.
     */
    traverseTree(
      /**
       * The function to apply to the traversed scene nodes. The first parameter to the callback function is of
       * type {@link sap.ui.vtm.SceneNode}.
       *  The second parameter to the callback function is an array of IDs of ancestors of the scene node being
       * processed.
       *  When the function returns `false`, the descendants of the scene node passed as the parameter are not
       * traversed.
       */
      callback: Function
    ): Scene;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:downloadCompleted downloadCompleted} event of
     * this `sap.ui.vtm.Scene`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Scene` itself.
     *
     * Raised when viewables have been downloaded (successfully or unsuccessfully) as a result of a call to
     * {@link #loadViewablesAsync}.
     *
     * If no viewables have been successfully downloaded, none of the viewables will be loaded, so no subsequent
     * {@link sap.ui.vtm.Scene.loadStarted}, {@link sap.ui.vtm.Scene.loadProgress} or {@link sap.ui.vtm.Scene.loadCompleted}
     * will occur as a result of the call to {@link #loadViewablesAsync} that resulted in the {@link sap.ui.vtm.Scene.downloadCompleted}
     * event being raised.
     */
    attachDownloadCompleted(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Scene` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:downloadProgress downloadProgress} event of
     * this `sap.ui.vtm.Scene`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Scene` itself.
     *
     * Raised to indicate download progress of a viewable while viewables are being downloaded
     */
    attachDownloadProgress(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Scene` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:downloadStarted downloadStarted} event of this
     * `sap.ui.vtm.Scene`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Scene` itself.
     *
     * Raised when starting a download of a set of viewables.
     */
    attachDownloadStarted(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Scene` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:hierarchyChanged hierarchyChanged} event of
     * this `sap.ui.vtm.Scene`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Scene` itself.
     *
     * Raised when the scene hierarchy has been modified.
     */
    attachHierarchyChanged(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Scene` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:loadCompleted loadCompleted} event of this `sap.ui.vtm.Scene`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Scene` itself.
     *
     * Raised when all viewables specified in a call to {@link #loadViewablesAsync} have either loaded or failed
     * to load.
     */
    attachLoadCompleted(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Scene` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:loadProgress loadProgress} event of this `sap.ui.vtm.Scene`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Scene` itself.
     *
     * Raised to provide progress information for a viewable that is being loaded.
     */
    attachLoadProgress(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Scene` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:loadStarted loadStarted} event of this `sap.ui.vtm.Scene`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Scene` itself.
     *
     * Raised when starting to load a set of viewables.
     */
    attachLoadStarted(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Scene` itself
       */
      oListener?: object
    ): this;
  }

  export interface $SceneSettings extends $ElementSettings {
    /**
     * Raised to indicate download progress of a viewable while viewables are being downloaded
     */
    downloadProgress?: Function;

    /**
     * Raised when starting a download of a set of viewables.
     */
    downloadStarted?: Function;

    /**
     * Raised when viewables have been downloaded (successfully or unsuccessfully) as a result of a call to
     * {@link #loadViewablesAsync}.
     *
     * If no viewables have been successfully downloaded, none of the viewables will be loaded, so no subsequent
     * {@link sap.ui.vtm.Scene.loadStarted}, {@link sap.ui.vtm.Scene.loadProgress} or {@link sap.ui.vtm.Scene.loadCompleted}
     * will occur as a result of the call to {@link #loadViewablesAsync} that resulted in the {@link sap.ui.vtm.Scene.downloadCompleted}
     * event being raised.
     */
    downloadCompleted?: Function;

    /**
     * Raised when starting to load a set of viewables.
     */
    loadStarted?: Function;

    /**
     * Raised to provide progress information for a viewable that is being loaded.
     */
    loadProgress?: Function;

    /**
     * Raised when all viewables specified in a call to {@link #loadViewablesAsync} have either loaded or failed
     * to load.
     */
    loadCompleted?: Function;

    /**
     * Raised when the scene hierarchy has been modified.
     */
    hierarchyChanged?: Function;
  }
}

declare module "sap/ui/vtm/SceneNode" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import { Matrix } from "sap/ui/vtm/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * This class provides access to the data for a scene node. Objects of this type are transient. Long lived
   * references to such objects should not be kept. A single {@link sap.ui.vtm.SceneNode} object can be reused
   * to refer to a different scene node by changing the value of the `sceneNodeId` property. Scene traversal
   * methods typically reuse a single {@link sap.ui.vtm.SceneNode} object to avoid construction and destruction.
   * Applications are expected to use their own data structures to store data extracted from scene nodes that
   * needs to be accessed efficiently.
   */
  export default class SceneNode extends UI5Element {
    /**
     * This class is not intended to be directly instantiated by application code. The scene traversal methods
     * ({@link sap.ui.vtm.Scene#traverseTree traverseTree}, {@link sap.ui.vtm.Scene#traverseBranch traverseBranch},
     * {@link sap.ui.vtm.Scene#traverseNodes traverseNodes}) should be used to access scene nodes
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * An optional ID for the {@link sap.ui.vtm.SceneNode}.
       */
      sId: string,
      /**
       * An optional object with initial settings for the new {@link sap.ui.vtm.SceneNode} instance.
       */
      mSettings?: $SceneNodeSettings
    );

    /**
     * Creates a new subclass of class sap.ui.vtm.SceneNode with name `sClassName` and enriches it with the
     * information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, SceneNode>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets the absolute transformation matrix that applies to the scene node in ISO 10303-42 format.
     */
    getAbsoluteMatrix(): Matrix;
    /**
     * Gets whether this scene node is closed. When a scene node is closed, the closed scene node and its descendants
     * are treated as a single scene node (at least in terms of selection).
     */
    getClosed(): boolean;
    /**
     * Gets a plain JavaScript object map of identifier values. Keys are in the form: `['{"source":"SAP","type":"VE_COMPONENT"}'`.
     * Values are strings or arrays of strings in the form: `'[{"name":"ID", "value":"_moto_x_asm"},{"name":"version",
     * "value": "00"},{"name": "timestamp", "value":"2016-05-18 03:44:53.93"}]'`.
     */
    getIdentifiers(): object;
    /**
     * Returns a metadata object for class sap.ui.vtm.SceneNode.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets the name of the scene node.
     */
    getName(): string;
    /**
     * Gets a plain JavaScript object map of metadata values. Keys are in the form: `'{"category":"SAP","field":"MATERIAL"}'`.
     * Values are in the form of strings or arrays of strings.
     */
    getNodeMetadata(): object;
    /**
     * Gets the relative transformation matrix that applies to the scene node in ISO 10303-42 format.
     */
    getRelativeMatrix(): Matrix;
    /**
     * Gets current value of property {@link #getScene scene}.
     *
     * The {@link sap.ui.vtm.Scene} for the scene node.
     */
    getScene(): object;
    /**
     * Gets current value of property {@link #getSceneNodeId sceneNodeId}.
     *
     * The scene node id.
     *
     * This is a transient identifier that exists in the context of the current scene. It should not be persisted.
     */
    getSceneNodeId(): string;
    /**
     * Sets the absolute transformation matrix that applies to the scene node in ISO 10303-42 format.
     */
    setAbsoluteMatrix(
      /**
       * The absolute transformation matrix that applies to the scene node in ISO 10303-42 format.
       */
      matrix: Matrix
    ): SceneNode;
    /**
     * Sets the relative transformation matrix that applies to the scene node in ISO 10303-42 format.
     */
    setRelativeMatrix(
      /**
       * The relative transformation matrix that applies to the scene node in ISO 10303-42 format.
       */
      matrix: Matrix
    ): SceneNode;
    /**
     * Sets a new value for property {@link #getScene scene}.
     *
     * The {@link sap.ui.vtm.Scene} for the scene node.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setScene(
      /**
       * New value for property `scene`
       */
      oScene: object
    ): this;
    /**
     * Sets a new value for property {@link #getSceneNodeId sceneNodeId}.
     *
     * The scene node id.
     *
     * This is a transient identifier that exists in the context of the current scene. It should not be persisted.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setSceneNodeId(
      /**
       * New value for property `sceneNodeId`
       */
      sSceneNodeId: string
    ): this;
  }

  export interface $SceneNodeSettings extends $ElementSettings {
    /**
     * The scene node id.
     *
     * This is a transient identifier that exists in the context of the current scene. It should not be persisted.
     */
    sceneNodeId?: string | PropertyBindingInfo;

    /**
     * The {@link sap.ui.vtm.Scene} for the scene node.
     */
    scene?: object | PropertyBindingInfo;
  }
}

declare module "sap/ui/vtm/SelectColumnsDialog" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import Column from "sap/ui/vtm/Column";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * A dialog used to select the columns to display in a {@link sap.ui.vtm.Tree}.
   */
  export default class SelectColumnsDialog extends Control {
    /**
     * Constructor for a new SelectColumnsDialog.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor();

    /**
     * Creates a new subclass of class sap.ui.vtm.SelectColumnsDialog with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, SelectColumnsDialog>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.vtm.SelectColumnsDialog.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getSelectableColumns selectableColumns}.
     *
     * The set of columns that should be shown in the dialog that may be selected for display.
     */
    getSelectableColumns(): Column[];
    /**
     * Gets current value of property {@link #getTree tree}.
     *
     * The {@link sap.ui.vtm.Tree} that column selection is being performed for.
     */
    getTree(): object;
    /**
     * Opens the dialog. The dialog applies the updated set of columns to the tree if confirmed.
     */
    open(): SelectColumnsDialog;
    /**
     * Sets a new value for property {@link #getSelectableColumns selectableColumns}.
     *
     * The set of columns that should be shown in the dialog that may be selected for display.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setSelectableColumns(
      /**
       * New value for property `selectableColumns`
       */
      sSelectableColumns: Column[]
    ): this;
    /**
     * Sets a new value for property {@link #getTree tree}.
     *
     * The {@link sap.ui.vtm.Tree} that column selection is being performed for.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setTree(
      /**
       * New value for property `tree`
       */
      oTree: object
    ): this;
  }

  export interface $SelectColumnsDialogSettings extends $ControlSettings {
    /**
     * The {@link sap.ui.vtm.Tree} that column selection is being performed for.
     */
    tree?: object | PropertyBindingInfo;

    /**
     * The set of columns that should be shown in the dialog that may be selected for display.
     */
    selectableColumns?: Column[] | PropertyBindingInfo;
  }
}

declare module "sap/ui/vtm/SelectionMode" {
  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * Enumeration specifying row selection modes for a {@link sap.ui.vtm.Tree}.
   */
  enum SelectionMode {
    /**
     * A multiple selection mode that toggles the selection state of a row when it is clicked.
     */
    MultiToggle = "MultiToggle",
    /**
     * Single selection mode.
     */
    Single = "Single",
  }
  export default SelectionMode;
}

declare module "sap/ui/vtm/TextColor" {
  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * Enumeration specifying text colors.
   */
  enum TextColor {
    /**
     * The default text color.
     */
    Default = "Default",
    /**
     * Gray.
     */
    Gray = "Gray",
    /**
     * Grey. A synonym for Gray.
     */
    Grey = "Grey",
  }
  export default TextColor;
}

declare module "sap/ui/vtm/Tree" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import TreeItemType from "sap/ui/vtm/TreeItemType";

  import Column from "sap/ui/vtm/Column";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import Panel from "sap/ui/vtm/Panel";

  import SelectionMode from "sap/ui/vtm/SelectionMode";

  import { CSSColor } from "sap/ui/core/library";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * A control that contains a tree and associated data columns and provides helper methods for tree manipulation.
   *
   *  Call {@link #setRootItems} to provide a tree model.
   *  Call {@link #updateCollections} after making changes to the tree hierarchy.
   *  Call {@link #updateModel} after making changes to the tree model (either changes to the the tree hierarchy
   * or changes to properties of tree items).
   *
   *
   * Items in the tree are plain JavaScript objects that have the following set of properties:
   * 	 - `id` - The unique id for the tree item. This is the only required field in the tree item object.
   *
   * 	 - `name` - The tree item name.
   * 	 - `iconUrl` - The URL string for the icon to show in the "tree" column.
   * 	 - `iconColor` - The color for the icon to show in the "tree" column.
   * 	 - `iconTooltip` - A tooltip for the icon to show in the "tree" column.
   * 	 - `absoluteMatrix` - An array of 13 numbers in ISO 10303-42 format representing an absolute transformation
   * 			matrix.
   * 	 - `relativeMatrix` - An array of 13 numbers in ISO 10303-42 format representing a relative transformation
   * 			matrix.
   * 	 - `includedChildren` - An array of tree items containing the children of this tree item that can be
   * 			displayed in the tree.
   * 	 - `excludedChildren` - An array of tree items containing the children of this tree item that are not
   * 			displayed in the tree.
   * 	 - `metadata` - A plain JavaScript object map containing metadata values for the tree item.
   *  Keys are JSON strings that can be parsed using JSON.parse() to get an object with category and field
   * string properties.
   *  Values can be of the following types: `string, string[]`, `number`, `number[]`, `boolean`, `boolean[]`,
   * `object`, `object[]`.
   * 	 - `identifiers` - A plain JavaScript object map containing VE9 identifier values for the tree item.
   *  Keys are JSON strings that can be parsed using JSON.parse() to get an object with source and type string
   * properties.
   *  Values can be of the following types: string, string[].
   *  Each value string is a JSON string that can be parsed using JSON.parse to get an array of name/value
   * pairs.
   *  The value in each name/value pair is optional.
   * 	 - `appData` - A plain JavaScript object map containing application data values for the tree item.
   *  Keys are application defined strings.
   *  Values can be of the following types: `string, string[]`, `number`, `number[]`, `boolean`, `boolean[]`,
   * `object`, `object[]`.
   * 	 - `textColor` - A {@link sap.ui.vtm.TextColor} value that specifies the color of the text for the tree
   * 			item in the Name data column (defaults to {@link sap.ui.vtm.TextColor.Default}).
   * 	 - `sceneNodeIds` - A string or array of strings containing the IDs of scene nodes to associate with
   * 			this tree item.
   * 	 - `visibility` - Used to determine visibility of associated scene nodes and control a visibility icon
   * 			shown in the {@link sap.ui.vtm.InternalColumnDescriptor.Visibility} column.
   *  When `true` associated scene nodes should be visible in the viewport (when their visibility is not overridden).
   *  When `false` associated scene nodes should not be visible in the viewport (when their visibility is
   * not overridden).
   *  When `null` or `undefined` no visibility icon is shown for the tree item and associated scene nodes
   * should not be visible in the viewport (when their visibility is not overridden).
   * 	 - `opacity` - A numeric value between 0 and 1 (inclusive) that specifies the opacity to apply to associated
   * 			scene nodes (when their opacity is not overridden).
   * 	 - `highlightColor` - A sap.ui.core.CSSColor that specifies a highlight color to apply to associated
   * 			scene nodes (when their highlight color is not overridden). The alpha component specifies the blend ratio
   * 			between the highlight color and the scene node color.
   * 	 - `messages` A string that can be parsed using JSON.parse() to produce an array of objects that can
   * 			be used to construct {@link sap.ui.core.Message} objects.
   *  Refer to the documentation for the `mSettings` parameter of the {@link sap.ui.core.Message} constructor
   * for valid values.
   * 	 - `messageStatusIconUrl` The URL of the icon to display in the message status column. If an extension
   * 			implementing {@link sap.ui.vtm.interfaces.IMessageStatusCalculationExtension} is being used, only that
   * 			extension should set values for this field.
   * 	 - `messageStatusIconColor` The {@link sap.ui.core.CSSColor} color of the icon to display in the message
   * 			status column. If an extension implementing {@link sap.ui.vtm.interfaces.IMessageStatusCalculationExtension}
   * 			is being used, only that extension should set values for this field.
   * 	 - `messageStatusIconTooltip` The tooltip for the icon in the message status column. If an extension
   * 			implementing {@link sap.ui.vtm.interfaces.IMessageStatusCalculationExtension} is being used, only that
   * 			extension should set values for this field.
   *
   * The `sceneNodeIds`, `visibility`, `opacity` and `highlightColor` properties are used by the extension
   * implementing {@link sap.ui.vtm.interfaces.IDisplayStateCalculationExtension} to determine the display
   * state of scene nodes shown in the {@link sap.ui.vtm.Viewport} associated with the {@link sap.ui.vtm.Tree}.
   *
   * Example:
   * ```javascript
   * {
   *      id: jQuery.sap.uid(),
   *      name: "Tree item name",
   *      iconUrl: "sap-icon://tree",
   *      iconTooltip: "Group"
   *      absoluteMatrix: [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1],
   *      relativeMatrix: [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1],
   *      includedChildren: [],
   *      metadata:{
   *         '{"category":"SAP","field":"MATERIAL"}': ["mat1", "mat2"]]
   *      },
   *      identifiers: {
   *          '{"source":"SAP","type":"VE_COMPONENT"}': '[{"name":"ID", "value":"_moto_x_asm"},{"name":"version", "value": "00"},{"name": "timestamp", "value":"2016-05-18 03:44:53.93"}]',
   *          '{"source":"SAP","type":"MATERIAL"}': ['[{"name":"ID", "value":"mat1"}]', '[{"name":"ID", "value":"mat2"}]']
   *      },
   *      appData:{
   *          "bomId: "bom1",
   *          "bomItemId: "bomItem1",
   *      },
   *      textColor: sap.ui.vtm.TextColor.Gray,
   *      sceneNodeIds: ["iffffffff01021520", "iffffffff01021528"],
   *      visibility: true,
   *      opacity: 0.3,
   *      highlightColor: "rgba(0,255,0,0.8)"
   *      messages: '[{"level":"Error","text":"some error"},{"level":"Error","text":"Another error"},{"level":"Warning","A warning"}]',
   *      messageStatusIconUrl: "sap-icon://error",
   *      messageStatusIconColor: "red",
   *      messageStatusIconTooltip: "Error"
   *  }```
   */
  export default class Tree extends Control {
    /**
     * This class is not intended to be instantiated directly by application code. A {@link sap.ui.vtm.Tree}
     * object is created when a {@link sap.ui.vtm.Panel} object is instantiated.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * id for the new {@link sap.ui.vtm.Tree}.
       */
      sId: string,
      /**
       * Object with initial property values, aggregated objects etc. for the new {@link sap.ui.vtm.Tree}.
       */
      mSettings: $TreeSettings
    );

    /**
     * Adds some headerControl to the aggregation {@link #getHeaderControls headerControls}.
     */
    addHeaderControl(
      /**
       * The headerControl to add; if empty, nothing is inserted
       */
      oHeaderControl: Control
    ): this;
    /**
     * Adds a root item to the tree.
     */
    addRoot(
      /**
       * The root tree item to remove.
       */
      rootItemToAdd: object
    ): Tree;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:beforeModelUpdated beforeModelUpdated} event
     * of this `sap.ui.vtm.Tree`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Tree` itself.
     *
     * Raised before the model is updated.
     */
    attachBeforeModelUpdated(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Tree` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:dataColumnsChanged dataColumnsChanged} event
     * of this `sap.ui.vtm.Tree`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Tree` itself.
     *
     * Raised when the data columns are updated.
     */
    attachDataColumnsChanged(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Tree` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:dragOver dragOver} event of this `sap.ui.vtm.Tree`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Tree` itself.
     *
     * Raised when a tree item is dragged over a tree item or an unpopulated row in a tree. To allow a drop
     * to occur call preventDefault() on the event.
     */
    attachDragOver(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Tree` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:dragStart dragStart} event of this `sap.ui.vtm.Tree`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Tree` itself.
     *
     * Raised when a tree item drag is initiated. To prevent a drag from being initiated call preventDefault()
     * on the event.
     */
    attachDragStart(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Tree` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:drop drop} event of this `sap.ui.vtm.Tree`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Tree` itself.
     *
     * Raised when a tree item is dropped on a tree item or an unpopulated row in a tree. A drop cannot occur
     * unless preventDefault() is called on the sap.ui.base.Event object in the preceding dragOver event.
     */
    attachDrop(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Tree` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:expandedChanged expandedChanged} event of this
     * `sap.ui.vtm.Tree`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Tree` itself.
     *
     * Raised when a tree item entry is expanded or collapsed.
     */
    attachExpandedChanged(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Tree` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:fixedColumnsChanged fixedColumnsChanged} event
     * of this `sap.ui.vtm.Tree`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Tree` itself.
     *
     * Raised when the fixed columns are updated.
     */
    attachFixedColumnsChanged(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Tree` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:hierarchyChanged hierarchyChanged} event of
     * this `sap.ui.vtm.Tree`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Tree` itself.
     *
     * Raised when the tree hierarchy (the set of parent child relationships) changes.
     */
    attachHierarchyChanged(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Tree` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:messageStatusHeaderIconClicked messageStatusHeaderIconClicked}
     * event of this `sap.ui.vtm.Tree`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Tree` itself.
     *
     * Raised when a tree item message status icon is clicked.
     */
    attachMessageStatusHeaderIconClicked(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Tree` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:messageStatusIconClicked messageStatusIconClicked}
     * event of this `sap.ui.vtm.Tree`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Tree` itself.
     *
     * Raised when a tree item message status icon is clicked.
     */
    attachMessageStatusIconClicked(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Tree` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:modelUpdated modelUpdated} event of this `sap.ui.vtm.Tree`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Tree` itself.
     *
     * Raised after the model has been updated.
     */
    attachModelUpdated(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Tree` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:selectionChanged selectionChanged} event of
     * this `sap.ui.vtm.Tree`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Tree` itself.
     *
     * Raised when the set of selected tree items for a tree changes.
     */
    attachSelectionChanged(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Tree` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:visibilityHeaderIconClicked visibilityHeaderIconClicked}
     * event of this `sap.ui.vtm.Tree`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Tree` itself.
     *
     * Raised when the icon in the visibility column header is clicked.
     */
    attachVisibilityHeaderIconClicked(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Tree` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:visibilityIconClicked visibilityIconClicked}
     * event of this `sap.ui.vtm.Tree`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Tree` itself.
     *
     * Raised when an icon in the visibility column is clicked.
     */
    attachVisibilityIconClicked(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Tree` itself
       */
      oListener?: object
    ): this;
    /**
     * Expands all tree items in the tree.
     */
    collapseAll(): Tree;
    /**
     * Destroys all the headerControls in the aggregation {@link #getHeaderControls headerControls}.
     */
    destroyHeaderControls(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:beforeModelUpdated beforeModelUpdated} event
     * of this `sap.ui.vtm.Tree`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachBeforeModelUpdated(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:dataColumnsChanged dataColumnsChanged} event
     * of this `sap.ui.vtm.Tree`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachDataColumnsChanged(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:dragOver dragOver} event of this `sap.ui.vtm.Tree`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachDragOver(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:dragStart dragStart} event of this `sap.ui.vtm.Tree`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachDragStart(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:drop drop} event of this `sap.ui.vtm.Tree`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachDrop(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:expandedChanged expandedChanged} event of
     * this `sap.ui.vtm.Tree`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachExpandedChanged(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:fixedColumnsChanged fixedColumnsChanged} event
     * of this `sap.ui.vtm.Tree`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachFixedColumnsChanged(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:hierarchyChanged hierarchyChanged} event of
     * this `sap.ui.vtm.Tree`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachHierarchyChanged(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:messageStatusHeaderIconClicked messageStatusHeaderIconClicked}
     * event of this `sap.ui.vtm.Tree`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachMessageStatusHeaderIconClicked(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:messageStatusIconClicked messageStatusIconClicked}
     * event of this `sap.ui.vtm.Tree`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachMessageStatusIconClicked(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:modelUpdated modelUpdated} event of this `sap.ui.vtm.Tree`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachModelUpdated(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:selectionChanged selectionChanged} event of
     * this `sap.ui.vtm.Tree`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachSelectionChanged(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:visibilityHeaderIconClicked visibilityHeaderIconClicked}
     * event of this `sap.ui.vtm.Tree`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachVisibilityHeaderIconClicked(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:visibilityIconClicked visibilityIconClicked}
     * event of this `sap.ui.vtm.Tree`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachVisibilityIconClicked(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Expands all tree items in the tree.
     */
    expandAll(): Tree;
    /**
     * Expands all ancestors of specified tree item.
     *
     * This method relies on {@link #updateCollections} being called after the tree is populated/changed.
     */
    expandAncestors(
      /**
       * Tree item.
       */
      treeItem: object
    ): Tree;
    /**
     * Expands tree items in the tree from the root down to the given level.
     */
    expandToLevel(
      /**
       * The tree level to expand to.
       */
      iLevel: int
    ): Tree;
    /**
     * Creates a new subclass of class sap.ui.vtm.Tree with name `sClassName` and enriches it with the information
     * contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, Tree>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Fires event {@link #event:beforeModelUpdated beforeModelUpdated} to attached listeners.
     */
    fireBeforeModelUpdated(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:dataColumnsChanged dataColumnsChanged} to attached listeners.
     */
    fireDataColumnsChanged(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:dragOver dragOver} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     */
    fireDragOver(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The tree item that was dragged.
         */
        dragItem?: object;
        /**
         * The tree of the tree item that was dragged.
         */
        dragTree?: Tree;
        /**
         * The tree item being dragged over or null if the tree item is being dragged over an unpopulated row.
         */
        dragOverItem?: object;
        /**
         * The tree being dragged over.
         */
        dragOverTree?: Tree;
      }
    ): boolean;
    /**
     * Fires event {@link #event:dragStart dragStart} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     */
    fireDragStart(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The tree item that was dragged.
         */
        dragItem?: object;
        /**
         * The tree of the tree item that was dragged.
         */
        dragTree?: Tree;
      }
    ): boolean;
    /**
     * Fires event {@link #event:drop drop} to attached listeners.
     */
    fireDrop(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The tree item that was dragged.
         */
        dragItem?: object;
        /**
         * The tree of the tree item that was dragged.
         */
        dragTree?: Tree;
        /**
         * The tree item that the drop occurred on or null if the item was not dropped on a tree item.
         */
        dropItem?: object;
        /**
         * The tree that the drop occurred on.
         */
        dropTree?: Tree;
      }
    ): this;
    /**
     * Fires event {@link #event:expandedChanged expandedChanged} to attached listeners.
     */
    fireExpandedChanged(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The tree item associated with the row that was expanded or collapsed.
         */
        item?: object;
        /**
         * If `true`, the row was expanded, otherwise it was collapsed.
         */
        expanded?: boolean;
        /**
         * Indicates that the event was fired due to the user clicking an expander.
         */
        userInteraction?: boolean;
      }
    ): this;
    /**
     * Fires event {@link #event:fixedColumnsChanged fixedColumnsChanged} to attached listeners.
     */
    fireFixedColumnsChanged(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:hierarchyChanged hierarchyChanged} to attached listeners.
     */
    fireHierarchyChanged(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:messageStatusHeaderIconClicked messageStatusHeaderIconClicked} to attached
     * listeners.
     */
    fireMessageStatusHeaderIconClicked(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:messageStatusIconClicked messageStatusIconClicked} to attached listeners.
     */
    fireMessageStatusIconClicked(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The associated tree item.
         */
        items?: object;
        /**
         * The message status icon control that was clicked.
         */
        control?: Control;
      }
    ): this;
    /**
     * Fires event {@link #event:modelUpdated modelUpdated} to attached listeners.
     */
    fireModelUpdated(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:selectionChanged selectionChanged} to attached listeners.
     */
    fireSelectionChanged(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The tree items that were added to the selection set for the tree.
         */
        addedItems?: object[];
        /**
         * The tree items that were removed from the selection set for the tree.
         */
        removedItems?: object[];
        /**
         * Indicates that the event was fired due to an explicit user interaction
         */
        userInteraction?: boolean;
      }
    ): this;
    /**
     * Fires event {@link #event:visibilityHeaderIconClicked visibilityHeaderIconClicked} to attached listeners.
     */
    fireVisibilityHeaderIconClicked(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The visibility state of the tree item.
         */
        visibility?: boolean;
        /**
         * The visibility header icon control that was clicked.
         */
        control?: Control;
      }
    ): this;
    /**
     * Fires event {@link #event:visibilityIconClicked visibilityIconClicked} to attached listeners.
     */
    fireVisibilityIconClicked(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The tree item whose visibility icon was clicked.
         */
        item?: object;
        /**
         * The visibility state of the tree item.
         */
        visibility?: boolean;
        /**
         * The visibility icon control that was clicked.
         */
        control?: Control;
      }
    ): this;
    /**
     * Finds all tree items in the tree of a given type.
     *
     * This method relies on {@link #updateCollections} being called after the tree is populated/changed.
     */
    getAllItems(
      /**
       * Indicates the types of tree item to match. Defaults to {@link sap.ui.vtm.TreeItemType.Included}.
       */
      treeItemType: TreeItemType | keyof typeof TreeItemType
    ): object[];
    /**
     * Finds all ancestors of a tree item.
     *
     * An empty array will be returned for root items.
     *  Otherwise an array of ancestor tree items will be returned.
     *  The array will be ordered such that:
     * 	 - The root item will be first element in the array.
     * 	 - The parent item will be last element in the array.
     *
     * This method relies on {@link #updateCollections} being called after the tree is populated/changed.
     */
    getAncestorItems(
      /**
       * The tree item or id of the tree item to get the ancestors of.
       */
      treeItem: object | string
    ): object[];
    /**
     * Gets the set of data columns for the tree.
     */
    getDataColumns(): Column[];
    /**
     * Gets the descendants of a tree item.
     *
     * This method relies on {@link #updateCollections} being called after the tree is populated/changed.
     */
    getDescendantItems(
      /**
       * The tree item or id of the tree item to get the descendants of.
       */
      treeItem: object | string,
      /**
       * Indicates the types of tree item to match. Defaults to {@link sap.ui.vtm.TreeItemType.Included}.
       */
      treeItemType: TreeItemType | keyof typeof TreeItemType
    ): object[] | undefined;
    /**
     * Gets whether the row associated with a tree item is expanded.
     *
     * This method relies on {@link #updateCollections} being called after the tree is populated/changed.
     */
    getExpanded(
      /**
       * The tree item.
       */
      oTreeItem: object
    ): boolean;
    /**
     * Gets the fixed columns for the tree.
     */
    getFixedColumns(): Column[];
    /**
     * Gets content of aggregation {@link #getHeaderControls headerControls}.
     *
     * A set of controls such as toolbars to show above the tree.
     */
    getHeaderControls(): Control[];
    /**
     * Gets the `highlightColor` property of a tree item or array of tree items.
     *
     * If a single tree item is passed to the method then a single value is returned.
     *  If an array of tree items is passed to the method then an array is returned.
     */
    getHighlightColor(
      /**
       * The tree item or the array of tree items.
       */
      treeItems: object | object[]
    ): string | string[];
    /**
     * Finds a tree item by id or returns undefined if it is not found.
     *  This method relies on {@link #updateCollections} being called after the tree is populated/changed.
     */
    getItem(
      /**
       * The tree item id to look for.
       */
      treeItemId: string
    ): object | undefined;
    /**
     * Finds a tree item by binding context path or returns undefined if it is not found. This is typically
     * used to find the corresponding tree item in event handlers for custom column template controls.
     */
    getItemByBindingContextPath(
      /**
       * The binding context path to look for.
       */
      bindingContextPath: string
    ): object | undefined;
    /**
     * Finds the set of tree items that are associated with a particular scene node id.
     *
     * This method relies on {@link #updateCollections} being called after the tree is populated/changed.
     */
    getItemsBySceneNodeId(
      /**
       * The scene node ID or IDs to find.
       */
      sceneNodeIds: string | string[],
      /**
       * Indicates the types of tree item to match. Defaults to {@link sap.ui.vtm.TreeItemType.Included}.
       */
      treeItemType: TreeItemType | keyof typeof TreeItemType
    ): object[];
    /**
     * Returns a metadata object for class sap.ui.vtm.Tree.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets the `opacity` property of a tree item or array of tree items.
     *
     * If a single tree item is passed to the method then a single value is returned.
     *  If an array of tree items is passed to the method then an array is returned.
     */
    getOpacity(
      /**
       * The tree item or the array of tree items.
       */
      treeItems: object | object[]
    ): float | float[];
    /**
     * Gets the panel this tree belongs to.
     */
    getPanel(): Panel;
    /**
     * Finds a parent tree item or returns undefined if it is not found.
     *
     * This method relies on {@link #updateCollections} being called after the tree is populated/changed.
     */
    getParentItem(
      /**
       * The child tree item or child tree item id.
       */
      treeItem: object | string
    ): object | undefined;
    /**
     * Gets the root tree items.
     */
    getRootItems(): object[];
    /**
     * Gets the selected tree items.
     */
    getSelectedItems(): object[];
    /**
     * Gets current value of property {@link #getSelectionMode selectionMode}.
     *
     * The tree selection mode.
     *
     * Default value is `"Single"`.
     */
    getSelectionMode(): SelectionMode | keyof typeof SelectionMode;
    /**
     * Gets the `visibility` property of a tree item or array of tree items.
     *
     * If a single tree item is passed to the method then a single value is returned.
     *  If an array of tree items is passed to the method then an array is returned.
     */
    getVisibility(
      /**
       * The tree item or the array of tree items.
       */
      treeItems: object | object[]
    ): boolean | boolean[];
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getHeaderControls headerControls}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfHeaderControl(
      /**
       * The headerControl whose index is looked for
       */
      oHeaderControl: Control
    ): int;
    /**
     * Inserts a headerControl into the aggregation {@link #getHeaderControls headerControls}.
     */
    insertHeaderControl(
      /**
       * The headerControl to insert; if empty, nothing is inserted
       */
      oHeaderControl: Control,
      /**
       * The `0`-based index the headerControl should be inserted at; for a negative value of `iIndex`, the headerControl
       * is inserted at position 0; for a value greater than the current size of the aggregation, the headerControl
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Returns whether the tree is empty.
     */
    isEmpty(): boolean;
    /**
     * Returns whether a tree item object is an excluded tree item in the tree model of this {@link sap.ui.vtm.Tree}.
     *
     * This method relies on {@link #updateCollections} being called after the tree is populated/changed.
     */
    isExcludedItem(
      /**
       * The tree item or tree item id to check.
       */
      treeItem: object | string
    ): boolean;
    /**
     * Returns whether a tree item object is an included tree item in the tree model of this {@link sap.ui.vtm.Tree}.
     *
     * This method relies on {@link #updateCollections} being called after the tree is populated/changed.
     */
    isIncludedItem(
      /**
       * The tree item or tree item id to check.
       */
      treeItem: object | string
    ): boolean;
    /**
     * Removes all the controls from the aggregation {@link #getHeaderControls headerControls}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllHeaderControls(): Control[];
    /**
     * Removes a headerControl from the aggregation {@link #getHeaderControls headerControls}.
     */
    removeHeaderControl(
      /**
       * The headerControl to remove or its index or id
       */
      vHeaderControl: int | string | Control
    ): Control;
    /**
     * Removes a root item from the tree.
     */
    removeRoot(
      /**
       * The root tree item to remove (or its id).
       */
      rootItemToRemove: string | object
    ): object | undefined;
    /**
     * Brings specified tree item to view, expanding the tree if necessary.
     *
     * This method relies on {@link #updateCollections} being called after the tree is populated/changed.
     */
    scrollIntoView(
      /**
       * The tree item to scroll into view.
       */
      treeItem: object
    ): Tree;
    /**
     * Sets the data columns for the tree.
     */
    setDataColumns(
      /**
       * The data columns for the tree.
       */
      dataColumns: Column[]
    ): Tree;
    /**
     * Expands or collapses the row associated with a tree item.
     *
     * This method relies on {@link #updateCollections} being called after the tree is populated/changed.
     */
    setExpanded(
      /**
       * The tree item.
       */
      oTreeItem: object,
      /**
       * If `true` the row will be expanded otherwise it will be collapsed.
       */
      bExpanded: boolean
    ): Tree;
    /**
     * Sets the fixed columns for the tree.
     */
    setFixedColumns(
      /**
       * The fixed columns.
       */
      fixedColumns: Column[]
    ): Tree;
    /**
     * Sets the `highlightColor` property of some tree items.
     */
    setHighlightColor(
      /**
       * The tree item or the array of tree items.
       */
      treeItems: object | object[],
      /**
       * The new highlight color value of the tree items.
       */
      highlightColor: CSSColor,
      /**
       * If `true` changes are applied recursively to included and excluded descendant tree items. Default value
       * is `true`.
       */
      recursive: boolean,
      /**
       * If `true` changes are only made to tree items that have a defined `visibility` property value. Default
       * value is `true`.
       */
      visualOnly: boolean,
      /**
       * If `true, {@link #updateModel} is called to refresh the tree (so the check eye icons are updated)
       * and {@link sap.ui.vtm.Viewport#refresh} is called on the corresponding {@link sap.ui.vtm.Viewport} to
       * recalculate the display state. Default value is true`.
       */
      refresh: boolean
    ): Tree;
    /**
     * Sets the `opacity` property of some tree items.
     */
    setOpacity(
      /**
       * The tree item or the array of tree items.
       */
      treeItems: object | object[],
      /**
       * The new opacity value of the tree items (between 0.0 and 1.0 inclusive).
       */
      opacity: float,
      /**
       * If `true` changes are applied recursively to included and excluded descendant tree items. Default value
       * is `true`.
       */
      recursive: boolean,
      /**
       * If `true` changes are only made to tree items that have a defined `visibility` property value. Default
       * value is `true`.
       */
      visualOnly: boolean,
      /**
       * If `true, {@link #updateModel} is called to refresh the tree (so the check eye icons are updated)
       * and {@link sap.ui.vtm.Viewport#refresh} is called on the corresponding {@link sap.ui.vtm.Viewport} to
       * recalculate the display state. Default value is true`.
       */
      refresh: boolean
    ): Tree;
    /**
     * Sets the root tree items.
     */
    setRootItems(
      /**
       * The root tree items.
       */
      rootItems: object[]
    ): Tree;
    /**
     * Sets the selected tree items.
     *
     * This method relies on {@link #updateCollections} being called after the tree is populated/changed.
     */
    setSelectedItems(
      /**
       * Tree item(s) to select in the tree.
       */
      items: object | object[],
      /**
       * When set brings selected item into view. Default value is to true.
       */
      scrollToView: boolean
    ): Tree;
    /**
     * Sets a new value for property {@link #getSelectionMode selectionMode}.
     *
     * The tree selection mode.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"Single"`.
     */
    setSelectionMode(
      /**
       * New value for property `selectionMode`
       */
      sSelectionMode?: SelectionMode | keyof typeof SelectionMode
    ): this;
    /**
     * Sets the `visibility` property of some tree items.
     */
    setVisibility(
      /**
       * The tree item or the array of tree items.
       */
      treeItems: object | object[],
      /**
       * The new visibility state of the tree items.
       */
      visibility: boolean,
      /**
       * If `true` changes are applied recursively to included and excluded descendant tree items. Default value
       * is `true`.
       */
      recursive: boolean,
      /**
       * If `true` changes are only made to tree items that have a defined `visibility` property value. Default
       * value is `true`.
       */
      visualOnly: boolean,
      /**
       * If `true, {@link #updateModel} is called to refresh the tree (so the check eye icons are updated)
       * and {@link sap.ui.vtm.Viewport#refresh} is called on the corresponding {@link sap.ui.vtm.Viewport} to
       * recalculate the display state. Default value is true`.
       */
      refresh: boolean
    ): Tree;
    /**
     * Recursively traverses a tree branch calling a function on each item (including the tree item that is
     * the root of the branch).
     */
    traverseBranch(
      /**
       * The root of the branch to apply the function to.
       */
      treeItem: object,
      /**
       * The function to apply to tree items in the branch.
       *  The first parameter to the callback function is the current tree item object (at the current point of
       * the traversal.
       *  The second parameter to the callback function is the set of ancestors of the current tree item in the
       * traversal.
       *  The function may return a {@link sap.ui.vtm.ChildCollectionType} value to specify which immediate children
       * of the tree item to traverse.
       *  If no such value is returned a default of {@link sap.ui.vtm.ChildCollectionType.Included} is used.
       */
      callback: Function
    ): Tree;
    /**
     * Recursively traverses the tree calling a function on each item.
     */
    traverseTree(
      /**
       * The function to apply to tree items in the tree.
       *  The first parameter to the callback function is the current tree item object (at the current point of
       * the traversal.
       *  The second parameter to the callback function is the set of ancestors of the current tree item.
       *  The function may return a {@link sap.ui.vtm.ChildCollectionType} value to specify which immediate children
       * to traverse. If no such value is returned a default of {@link sap.ui.vtm.ChildCollectionType.Included}
       * is used.
       */
      callback: Function
    ): Tree;
    /**
     * Updates collections used to find tree items by various criteria.
     *  This method should be called whenever the tree has been populated, when the tree structure has changed
     * or when any of the following fields have been modified for a tree item in the tree:
     * 	 - id
     * 	 - sceneNodeIds *****
     * 	 - includedChildren
     * 	 - excludedChildren
     *  Correct usage of this method is required by the following methods:
     * 	 - {@link #getItem}
     * 	 - {@link #getParentItem}
     * 	 - {@link #getDescendantItems}
     * 	 - {@link #getAncestorItems}
     * 	 - {@link #getItemsBySceneNodeId} *****
     * 	 - {@link #setExpanded}
     * 	 - {@link #getExpanded}
     * 	 - {@link #expandAncestors}
     * 	 - {@link #scrollIntoView}
     * 	 - {@link #setSelectedItems}
     * 	 - {@link #isIncludedItem}
     * 	 - {@link #isExcludedItem}
     * 	 - {@link #traverseBranch}
     *  ***** When the only changes to the tree since the last call to {@link #updateCollections} are changes
     * to the sceneNodeIds properties of the tree items, {@link #updateTreeItemsBySceneNodeId} can
     * be used instead of {@link #updateCollections}.
     */
    updateCollections(
      /**
       * When true a `hierarchyChanged` event will be raised if the hierarchy has changed since the last time
       * this method was called. This method is called when the tree is empty as part of the {@link sap.ui.vtm.Tree}
       * constructor, so the first time it is called from application code a `hierarchyChanged` event will be
       * raised if the tree has been populated. The default value for the parameter is `true`.
       */
      checkForHierarchyChanges: boolean
    ): Tree;
    /**
     * Updates the model.
     *
     * The application should call this whenever changes are made to the tree model.
     */
    updateModel(
      /**
       * If `true`, the tree control model and bindings are recreated. If `false` and the model and bindings already
       * exist, this call only results in the bindings being refreshed. Rebuilding the model and bindings is much
       * more expensive than refreshing the bindings, so only use a value of `true` for this parameter when a
       * value of `false` does not result in the the tree being updated correctly.
       */
      forceRecreate: boolean
    ): Tree;
    /**
     * Update the collection used by {@link #getItemsBySceneNodeId}.
     *
     * This is useful when the only changes to the tree since the last call to {@link #updateCollections} are
     * changes to the sceneNodeIds properties of the tree items.
     */
    updateTreeItemsBySceneNodeId(): Tree;
    /**
     * Validates the tree. If errors are found they are written to the console log and an exception is thrown.
     */
    validateTree(): Tree;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:beforeModelUpdated beforeModelUpdated} event
     * of this `sap.ui.vtm.Tree`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Tree` itself.
     *
     * Raised before the model is updated.
     */
    attachBeforeModelUpdated(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Tree` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:dataColumnsChanged dataColumnsChanged} event
     * of this `sap.ui.vtm.Tree`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Tree` itself.
     *
     * Raised when the data columns are updated.
     */
    attachDataColumnsChanged(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Tree` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:dragOver dragOver} event of this `sap.ui.vtm.Tree`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Tree` itself.
     *
     * Raised when a tree item is dragged over a tree item or an unpopulated row in a tree. To allow a drop
     * to occur call preventDefault() on the event.
     */
    attachDragOver(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Tree` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:dragStart dragStart} event of this `sap.ui.vtm.Tree`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Tree` itself.
     *
     * Raised when a tree item drag is initiated. To prevent a drag from being initiated call preventDefault()
     * on the event.
     */
    attachDragStart(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Tree` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:drop drop} event of this `sap.ui.vtm.Tree`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Tree` itself.
     *
     * Raised when a tree item is dropped on a tree item or an unpopulated row in a tree. A drop cannot occur
     * unless preventDefault() is called on the sap.ui.base.Event object in the preceding dragOver event.
     */
    attachDrop(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Tree` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:expandedChanged expandedChanged} event of this
     * `sap.ui.vtm.Tree`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Tree` itself.
     *
     * Raised when a tree item entry is expanded or collapsed.
     */
    attachExpandedChanged(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Tree` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:fixedColumnsChanged fixedColumnsChanged} event
     * of this `sap.ui.vtm.Tree`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Tree` itself.
     *
     * Raised when the fixed columns are updated.
     */
    attachFixedColumnsChanged(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Tree` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:hierarchyChanged hierarchyChanged} event of
     * this `sap.ui.vtm.Tree`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Tree` itself.
     *
     * Raised when the tree hierarchy (the set of parent child relationships) changes.
     */
    attachHierarchyChanged(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Tree` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:messageStatusHeaderIconClicked messageStatusHeaderIconClicked}
     * event of this `sap.ui.vtm.Tree`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Tree` itself.
     *
     * Raised when a tree item message status icon is clicked.
     */
    attachMessageStatusHeaderIconClicked(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Tree` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:messageStatusIconClicked messageStatusIconClicked}
     * event of this `sap.ui.vtm.Tree`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Tree` itself.
     *
     * Raised when a tree item message status icon is clicked.
     */
    attachMessageStatusIconClicked(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Tree` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:modelUpdated modelUpdated} event of this `sap.ui.vtm.Tree`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Tree` itself.
     *
     * Raised after the model has been updated.
     */
    attachModelUpdated(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Tree` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:selectionChanged selectionChanged} event of
     * this `sap.ui.vtm.Tree`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Tree` itself.
     *
     * Raised when the set of selected tree items for a tree changes.
     */
    attachSelectionChanged(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Tree` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:visibilityHeaderIconClicked visibilityHeaderIconClicked}
     * event of this `sap.ui.vtm.Tree`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Tree` itself.
     *
     * Raised when the icon in the visibility column header is clicked.
     */
    attachVisibilityHeaderIconClicked(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Tree` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:visibilityIconClicked visibilityIconClicked}
     * event of this `sap.ui.vtm.Tree`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Tree` itself.
     *
     * Raised when an icon in the visibility column is clicked.
     */
    attachVisibilityIconClicked(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Tree` itself
       */
      oListener?: object
    ): this;
  }

  export interface $TreeSettings extends $ControlSettings {
    /**
     * The tree selection mode.
     */
    selectionMode?:
      | (SelectionMode | keyof typeof SelectionMode)
      | PropertyBindingInfo;

    /**
     * A set of controls such as toolbars to show above the tree.
     */
    headerControls?: Control[] | Control | AggregationBindingInfo;

    /**
     * Raised when a tree item drag is initiated. To prevent a drag from being initiated call preventDefault()
     * on the event.
     */
    dragStart?: Function;

    /**
     * Raised when a tree item is dragged over a tree item or an unpopulated row in a tree. To allow a drop
     * to occur call preventDefault() on the event.
     */
    dragOver?: Function;

    /**
     * Raised when a tree item is dropped on a tree item or an unpopulated row in a tree. A drop cannot occur
     * unless preventDefault() is called on the sap.ui.base.Event object in the preceding dragOver event.
     */
    drop?: Function;

    /**
     * Raised when the set of selected tree items for a tree changes.
     */
    selectionChanged?: Function;

    /**
     * Raised when the icon in the visibility column header is clicked.
     */
    visibilityHeaderIconClicked?: Function;

    /**
     * Raised when an icon in the visibility column is clicked.
     */
    visibilityIconClicked?: Function;

    /**
     * Raised when a tree item entry is expanded or collapsed.
     */
    expandedChanged?: Function;

    /**
     * Raised when the fixed columns are updated.
     */
    fixedColumnsChanged?: Function;

    /**
     * Raised when the data columns are updated.
     */
    dataColumnsChanged?: Function;

    /**
     * Raised before the model is updated.
     */
    beforeModelUpdated?: Function;

    /**
     * Raised after the model has been updated.
     */
    modelUpdated?: Function;

    /**
     * Raised when a tree item message status icon is clicked.
     */
    messageStatusIconClicked?: Function;

    /**
     * Raised when a tree item message status icon is clicked.
     */
    messageStatusHeaderIconClicked?: Function;

    /**
     * Raised when the tree hierarchy (the set of parent child relationships) changes.
     */
    hierarchyChanged?: Function;
  }
}

declare module "sap/ui/vtm/TreeItemType" {
  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * Enumeration specifying the type(s) of tree item to match during tree traversal.
   */
  enum TreeItemType {
    /**
     * A tree item that is in the object hierarchy of the tree model, but cannot be shown in the tree. A tree
     * item is an excluded tree item when any ancestor of the tree item is included in the `excludedChildren`
     * collection of its parent.
     */
    Excluded = "Excluded",
    /**
     * A tree item that can be shown in the tree. A tree item is an included tree item when it is a root tree
     * item or is included in the `includedChildren` collection of its parent.
     */
    Included = "Included",
    /**
     * Matches either included or excluded tree items.
     */
    IncludedOrExcluded = "IncludedOrExcluded",
  }
  export default TreeItemType;
}

declare module "sap/ui/vtm/TreeItemUtilities" {
  import ChildCollectionType from "sap/ui/vtm/ChildCollectionType";

  import { Matrix } from "sap/ui/vtm/library";

  import Message from "sap/ui/core/Message";

  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * A set of utility functions for working with tree items for {@link sap.ui.vtm.Tree} controls.
   */
  interface TreeItemUtilities {
    /**
     * Adds a child tree item to the end of the the `includedChildren` or `excludedChildren` collection of its
     * parent tree item.
     */
    addChild(
      /**
       * The parent tree item.
       */
      item: object,
      /**
       * The child tree item.
       */
      childItem: object,
      /**
       * Controls which child collection to add the child tree item to.
       * 	 - {@link sap.ui.vtm.ChildCollectionType.None} - No action is performed.
       * 	 - {@link sap.ui.vtm.ChildCollectionType.Included} - The child tree item will be added to the `includedChildren`
       * 			collection of the tree item.
       * 	 - {@link sap.ui.vtm.ChildCollectionType.Excluded} - The child tree item will be added to the `excludedChildren`
       * 			collection of the tree item.
       * 	 - {@link sap.ui.vtm.ChildCollectionType.IncludedAndExcluded} - Results in an exception being thrown
       * 			because tree item IDs must be unique in the tree at any given point in time, so a tree item cannot be
       * 			added to both collections.  The default value is {@link sap.ui.vtm.ChildCollectionType.Included}.
       */
      childCollectionType:
        | ChildCollectionType
        | keyof typeof ChildCollectionType
    ): void;
    /**
     * Adds a child tree item to the end of the the `excludedChildren` collection of its parent tree item.
     */
    addExcludedChild(
      /**
       * The parent tree item.
       */
      item: object,
      /**
       * The child tree item.
       */
      childItem: object
    ): void;
    /**
     * Adds a child tree item to the end of the the `includedChildren` collection of its parent tree item.
     */
    addIncludedChild(
      /**
       * The parent tree item.
       */
      item: object,
      /**
       * The child tree item.
       */
      childItem: object
    ): void;
    /**
     * Adds a root item to the tree.
     */
    addRoot(
      /**
       * The existing set of root items.
       */
      rootItems: object[],
      /**
       * The root tree item to remove.
       */
      rootItemToAdd: object
    ): void;
    /**
     * Calculates the absolute matrix that should be applied to a tree item given its relative matrix and the
     * absolute matrix of its parent.
     */
    calculateAbsoluteMatrix(
      /**
       * The relative matrix of the tree item.
       */
      relativeMatrix: Matrix,
      /**
       * The absolute matrix of the parent tree item.
       */
      parentAbsoluteMatrix: Matrix
    ): Matrix;
    /**
     * Calculates the relative matrix that should be applied to a tree item given its absolute matrix and the
     * absolute matrix of its parent.
     */
    calculateRelativeMatrix(
      /**
       * The absolute matrix of the tree item.
       */
      absoluteMatrix: Matrix,
      /**
       * The absolute matrix of the parent tree item.
       */
      parentAbsoluteMatrix: Matrix
    ): Matrix;
    /**
     * Returns a cloned copy of the appData on the passed tree item.
     */
    cloneAppData(
      /**
       * The tree item.
       */
      treeItem: object
    ): object;
    /**
     * Returns a cloned copy of the identifiers on the passed tree item.
     */
    cloneIdentifiers(
      /**
       * The tree item.
       */
      treeItem: object
    ): object;
    /**
     * Returns a cloned copy of the metadata on the passed tree item.
     */
    cloneMetadata(
      /**
       * The tree item.
       */
      treeItem: object
    ): object;
    /**
     * Moves all items from the `includedChildren` collection of a tree item (or set of tree items) to the `excludedChildren`
     * collection.
     */
    excludeAllChildren(
      /**
       * The tree item or items.
       */
      treeItems: object[] | object,
      /**
       * When `true` the items in the `includedChildren` collections of descendants are moved to the `excludedChildren`
       * collection of the descendant tree item. Defaults to `false`.
       */
      recursive: boolean
    ): void;
    /**
     * Gets the application data field descriptors for a given tree item.
     */
    getAppDataDescriptors(
      /**
       * The tree item to get application data field descriptors from.
       */
      treeItem: object
    ): string[];
    /**
     * Gets the application data values associated with a particular descriptor for a tree item.
     */
    getAppDataValues(
      /**
       * The tree item to get application data values from.
       */
      treeItem: object,
      /**
       * The descriptor describing the application data value(s) to retrieve.
       */
      descriptor: string
    ): string[] | number[] | boolean[] | object[];
    /**
     * Gets the children of a tree item from the `includedChildren` and/or `excludedChildren` collections.
     */
    getChildren(
      /**
       * The tree item.
       */
      treeItem: object,
      /**
       * Specifies which child item collections to get children from.
       * 	 - {@link sap.ui.vtm.ChildCollectionType.None} - An empty array is returned.
       * 	 - {@link sap.ui.vtm.ChildCollectionType.Included} - Gets the items in the `includedChildren` collection
       * 			of the tree item.
       * 	 - {@link sap.ui.vtm.ChildCollectionType.Excluded} - Gets the items in the `excludedChildren` collection
       * 			of the tree item.
       * 	 - {@link sap.ui.vtm.ChildCollectionType.IncludedAndExcluded} - Gets the items in the `includedChildren`
       * 			and `excludedChildren` collections of the tree item.  The default value is {@link sap.ui.vtm.ChildCollectionType.Included}.
       */
      childCollectionType:
        | ChildCollectionType
        | keyof typeof ChildCollectionType
    ): object[];
    /**
     * Gets the excluded children of a tree item.
     */
    getExcludedChildren(
      /**
       * The tree item.
       */
      treeItem: object
    ): object[];
    /**
     * Gets the identifier descriptors for a given tree item.
     */
    getIdentifierDescriptors(
      /**
       * The tree item to get identifier descriptors from.
       */
      treeItem: object
    ): string[];
    /**
     * Gets the identifier values associated with a particular descriptor for a tree item.
     */
    getIdentifierValues(
      /**
       * The tree item to retrieve values from.
       */
      treeItem: object,
      /**
       * The descriptor describing the identifier value(s) to retrieve.
       */
      descriptor: string
    ): string[];
    /**
     * Gets the included children of a tree item.
     */
    getIncludedChildren(
      /**
       * The tree item.
       */
      treeItem: object
    ): object[];
    /**
     * Gets the messages stored on a tree item.
     */
    getMessages(
      /**
       * The tree item.
       */
      treeItem: object
    ): Message[];
    /**
     * Gets the metadata field descriptors for a given tree item.
     */
    getMetadataDescriptors(
      /**
       * The tree item to get metadata field descriptors from.
       */
      treeItem: object
    ): string[];
    /**
     * Gets the metadata values associated with a particular descriptor for a tree item.
     */
    getMetadataValues(
      /**
       * The tree item to metadata values from.
       */
      treeItem: object,
      /**
       * The descriptor describing the metadata value(s) to retrieve.
       */
      descriptor: string
    ): string[] | number[] | boolean[] | object[];
    /**
     * Gets the IDs of the scene nodes associated with a tree item as an array of strings.
     */
    getSceneNodeIds(
      /**
       * The tree item.
       */
      treeItem: object
    ): string[];
    /**
     * Gets whether a tree item has items in the `includedChildren` and/or `excludedChildren` collections.
     */
    hasChildren(
      /**
       * The tree item.
       */
      treeItem: object,
      /**
       * The child item collections to check.
       * 	 - {@link sap.ui.vtm.ChildCollectionType.None} - Returns `false`.
       * 	 - {@link sap.ui.vtm.ChildCollectionType.Included} - Gets whether there are items in the `includedChildren`
       * 			collection of the tree item.
       * 	 - {@link sap.ui.vtm.ChildCollectionType.Excluded} - Gets whether there are items in the `excludedChildren`
       * 			collection of the tree item.
       * 	 - {@link sap.ui.vtm.ChildCollectionType.IncludedAndExcluded} - Gets whether there are items in either
       * 			the `includedChildren` collection or the `excludedChildren` collection of the tree item.  The default
       * 			value is {@link sap.ui.vtm.ChildCollectionType.Included}.
       */
      childCollectionType:
        | ChildCollectionType
        | keyof typeof ChildCollectionType
    ): boolean;
    /**
     * Gets whether a tree item has excluded children.
     */
    hasExcludedChildren(
      /**
       * The tree item.
       */
      treeItem: object
    ): object[];
    /**
     * Gets whether a tree item has included children.
     */
    hasIncludedChildren(
      /**
       * The tree item.
       */
      treeItem: object
    ): object[];
    /**
     * Returns whether the tree item has a `visibility` value.
     */
    hasVisibility(
      /**
       * The tree item.
       */
      treeItem: object
    ): boolean;
    /**
     * Moves all items from the `excludedChildren` collection of a tree item (or set of tree items) to the `includedChildren`
     * collection.
     */
    includeAllChildren(
      /**
       * The tree item or items.
       */
      treeItems: object[] | object,
      /**
       * When `true` the items in the `excludedChildren` collections of descendants are moved to the `includedChildren`
       * collection of the descendant tree item. Defaults to `false`.
       */
      recursive: boolean
    ): void;
    /**
     * Applies a mapping function to each tree item in a branch of a tree to create a new tree branch.
     */
    mapBranch(
      /**
       * The tree item representing the branch to map.
       */
      treeItem: object,
      /**
       * A function that takes a tree item and returns a new tree item.
       */
      mapFunc: Function
    ): object;
    /**
     * Applies a mapping function to each tree item in a tree to create a new tree.
     */
    mapTree(
      /**
       * The root tree items of the tree to map.
       */
      rootTreeItems: object[],
      /**
       * A function that takes a tree item and returns a new tree item.
       */
      mapFunc: Function
    ): object[];
    /**
     * Removes a child tree item from the `includedChildren` and/or `excludedChildren` collection of its parent
     * tree item.
     */
    removeChild(
      /**
       * The parent tree item.
       */
      item: object,
      /**
       * The child tree item to remove (or its id).
       */
      childItem: string | object,
      /**
       * Controls which child collection to remove the child tree item from.
       * 	 - {@link sap.ui.vtm.ChildCollectionType.None} - No action is performed.
       * 	 - {@link sap.ui.vtm.ChildCollectionType.Included} - The child tree item will be removed from the `includedChildren`
       * 			collection of the tree item.
       * 	 - {@link sap.ui.vtm.ChildCollectionType.Excluded} - The child tree item will be removed from the `excludedChildren`
       * 			collection of the tree item.
       * 	 - {@link sap.ui.vtm.ChildCollectionType.IncludedAndExcluded} - The child tree item will be removed
       * 			from the `includedChildren` and `excludedChildren` collections of the tree item.
       *  Note that duplicate tree item ids are not allowed in the tree, so a given tree item should exist in
       * at most one of these collections at a given point in time.  The default value is {@link sap.ui.vtm.ChildCollectionType.Included}.
       */
      childCollectionType:
        | ChildCollectionType
        | keyof typeof ChildCollectionType
    ): object | undefined;
    /**
     * Removes a child tree item from the `excludedChildren` collection of its parent tree item.
     */
    removeExcludedChild(
      /**
       * The parent tree item.
       */
      item: object,
      /**
       * The child tree item to remove (or its id).
       */
      childItem: string | object
    ): object | undefined;
    /**
     * Removes a child tree item from the `includedChildren` collection of its parent tree item.
     */
    removeIncludedChild(
      /**
       * The parent tree item.
       */
      item: object,
      /**
       * The child tree item to remove (or its id).
       */
      childItem: string | object
    ): object | undefined;
    /**
     * Removes a root item from the tree.
     */
    removeRoot(
      /**
       * The existing set of root items.
       */
      rootItems: object[],
      /**
       * The root tree item to remove (or its id).
       */
      rootItemToRemove: string | object
    ): object | undefined;
    /**
     * Set the application data values associated with a particular descriptor for a tree item (replacing any
     * existing values).
     */
    setAppDataValues(
      /**
       * The tree item to update.
       */
      treeItem: object,
      /**
       * The descriptor describing the application data value(s) to update.
       */
      descriptor: string,
      /**
       * The application data value or values to apply. A value of undefined clears all values for the descriptor.
       */
      values:
        | undefined
        | string
        | string[]
        | number
        | number[]
        | boolean
        | boolean[]
        | object
        | object[]
    ): void;
    /**
     * Sets either the `includedChildren` or `excludedChildren` collection of a tree item.
     */
    setChildren(
      /**
       * The tree item.
       */
      treeItem: object,
      /**
       * The items to set in the `includedChildren` or `excludedChildren` collection of the tree item.
       */
      children: object[],
      /**
       * Controls which child collection to set on the tree item.
       * 	 - {@link sap.ui.vtm.ChildCollectionType.None} - No action is performed.
       * 	 - {@link sap.ui.vtm.ChildCollectionType.Included} - The `includedChildren` collection of the tree item
       * 			will be set.
       * 	 - {@link sap.ui.vtm.ChildCollectionType.Excluded} - The `excludedChildren` collection of the tree item
       * 			will be set.
       * 	 - {@link sap.ui.vtm.ChildCollectionType.IncludedAndExcluded} - Results in an exception being thrown
       * 			because tree item IDs must be unique in the tree at any given point in time, so a tree item cannot be
       * 			added to both collections.  The default value is {@link sap.ui.vtm.ChildCollectionType.Included}.
       */
      childCollectionType:
        | ChildCollectionType
        | keyof typeof ChildCollectionType
    ): void;
    /**
     * Sets the `excludedChildren` collection of a tree item.
     */
    setExcludedChildren(
      /**
       * The tree item.
       */
      treeItem: object,
      /**
       * The items to set in the `includedChildren` collection of the tree item.
       */
      excludedChildren: object[]
    ): void;
    /**
     * Set the identifier values associated with a particular descriptor for a tree item (replacing any existing
     * values).
     */
    setIdentifierValues(
      /**
       * The tree item to update.
       */
      treeItem: object,
      /**
       * The descriptor describing the identifier value(s) to update.
       */
      descriptor: string,
      /**
       * The identifier value or values to apply. A value of undefined clears all values for the descriptor.
       */
      values: string | string[] | undefined
    ): void;
    /**
     * Sets the `includedChildren` collection of a tree item.
     */
    setIncludedChildren(
      /**
       * The tree item.
       */
      treeItem: object,
      /**
       * The items to set in the `includedChildren` collection of the tree item.
       */
      includedChildren: object[]
    ): void;
    /**
     * Sets the messages stored on a tree item.
     */
    setMessages(
      /**
       * The tree item.
       */
      treeItem: object,
      /**
       * The set of messages to apply to the tree item.
       */
      messages: Message[]
    ): void;
    /**
     * Set the metadata values associated with a particular descriptor for a tree item (replacing any existing
     * values).
     */
    setMetadataValues(
      /**
       * The tree item to update.
       */
      treeItem: object,
      /**
       * The descriptor describing the metadata value(s) to update.
       */
      descriptor: string,
      /**
       * The metadata value or values to apply. A value of undefined clears all values for the descriptor.
       */
      values:
        | undefined
        | string
        | string[]
        | number
        | number[]
        | boolean
        | boolean[]
        | object
        | object[]
    ): void;
    /**
     * Sets the IDs of the scene nodes to associate with a tree item in a memory efficient manner.
     */
    setSceneNodeIds(
      /**
       * The tree item.
       */
      treeItem: object,
      /**
       * The scene node IDs for the tree item. A value of undefined clears all values for the descriptor.
       */
      sceneNodeIds: string | string[] | undefined
    ): void;
    /**
     * Recursively traverses a tree branch calling a function on each item (including the tree item that is
     * the root of the branch).
     */
    traverseBranch(
      /**
       * The root of the branch to apply the function to.
       */
      treeItem: object,
      /**
       * The function to apply to tree items in the branch.
       *  The first parameter to the callback function is the current tree item object (at the current point of
       * the traversal.
       *  The second parameter to the callback function is the set of ancestors of the current tree item.
       *  The second parameter to the callback function will not be populated unless the `ancestors` parameter
       * of {@link sap.ui.vtm.TreeItemUtilities.traverseBranch traverseBranch} is provided.
       *  The function may return a {@link sap.ui.vtm.ChildCollectionType} value to specify which immediate children
       * of the tree item to traverse.
       *  If no such value is returned a default of {@link sap.ui.vtm.ChildCollectionType.Included} is used.
       */
      callback: Function,
      /**
       * The ancestors of the tree item. If provided this will be used to calculate the set of ancestors of each
       * tree item during traversal (to be passed into the callback function).
       */
      ancestors?: object[]
    ): void;
    /**
     * Recursively traverses a tree calling a function on each item.
     */
    traverseTree(
      /**
       * The root items of the tree.
       */
      rootItems: object[],
      /**
       * The function to apply to tree items in the tree.
       *  The first parameter to the callback function is the current tree item object (at the current point of
       * the traversal.
       *  The second parameter to the callback function is the set of ancestors of the current tree item.
       *  The function may return a {@link sap.ui.vtm.ChildCollectionType} value to specify which immediate children
       * to traverse. If no such value is returned a default of {@link sap.ui.vtm.ChildCollectionType.Included}
       * is used.
       */
      callback: Function
    ): void;
    /**
     * Validates a tree and returns a set of error messages.
     */
    validateTree(
      /**
       * The root tree items.
       */
      rootItems: object[]
    ): string[];
    /**
     * Validates a tree item and returns a set of error messages.
     */
    validateTreeItem(
      /**
       * The tree item.
       */
      treeItem: object
    ): string[];
  }
  const TreeItemUtilities: TreeItemUtilities;
  export default TreeItemUtilities;
}

declare module "sap/ui/vtm/Viewable" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { Matrix } from "sap/ui/vtm/library";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * A viewable containing 3D content that can be loaded into a {@link sap.ui.vtm.Scene}.
   */
  export default class Viewable extends UI5Element {
    /**
     * Constructor for a new Viewable.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * An optional ID for the {@link sap.ui.vtm.Viewable}.
       */
      sId: string,
      /**
       * An optional object with initial settings for the new {@link sap.ui.vtm.Viewable} instance
       */
      mSettings?: $ViewableSettings
    );

    /**
     * Creates a new subclass of class sap.ui.vtm.Viewable with name `sClassName` and enriches it with the information
     * contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, Viewable>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.vtm.Viewable.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getName name}.
     *
     * The name for this Viewable.
     */
    getName(): string;
    /**
     * Gets current value of property {@link #getRelativeMatrix relativeMatrix}.
     *
     * The relative transformation matrix to apply to the scene node created to wrap the contents of the loaded
     * viewable.
     */
    getRelativeMatrix(): Matrix;
    /**
     * Gets current value of property {@link #getRootNodeIds rootNodeIds}.
     *
     * The root scene node IDs for this viewable.
     */
    getRootNodeIds(): string[];
    /**
     * Gets current value of property {@link #getSource source}.
     *
     * The source URL (string) or File for this Viewable.
     */
    getSource(): any;
    /**
     * Gets the unique ID that identifies this Viewable. This is an alias for {@link #getId}
     */
    getSourceId(): string;
    /**
     * Returns a string representation of the source. If the source is a {@link File} this returns the file
     * name (which is not guaranteed to uniquely identify the file).
     */
    getSourceString(): string;
    /**
     * Sets the name for this Viewable.
     */
    setName(
      /**
       * The name for this Viewable.
       */
      name: string
    ): Viewable;
    /**
     * Sets a new value for property {@link #getRelativeMatrix relativeMatrix}.
     *
     * The relative transformation matrix to apply to the scene node created to wrap the contents of the loaded
     * viewable.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setRelativeMatrix(
      /**
       * New value for property `relativeMatrix`
       */
      sRelativeMatrix: Matrix
    ): this;
    /**
     * Sets a new value for property {@link #getRootNodeIds rootNodeIds}.
     *
     * The root scene node IDs for this viewable.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setRootNodeIds(
      /**
       * New value for property `rootNodeIds`
       */
      sRootNodeIds: string[]
    ): this;
    /**
     * Sets the source URL or File for this Viewable.
     */
    setSource(
      /**
       * The source URL of File for this Viewable.
       */
      source: string | File
    ): Viewable;
  }

  export interface $ViewableSettings extends $ElementSettings {
    /**
     * The source URL (string) or File for this Viewable.
     */
    source?: any | PropertyBindingInfo;

    /**
     * The name for this Viewable.
     */
    name?: string | PropertyBindingInfo;

    /**
     * The root scene node IDs for this viewable.
     */
    rootNodeIds?: string[] | PropertyBindingInfo;

    /**
     * The relative transformation matrix to apply to the scene node created to wrap the contents of the loaded
     * viewable.
     */
    relativeMatrix?: Matrix | PropertyBindingInfo;
  }
}

declare module "sap/ui/vtm/ViewableLoadInfo" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import ViewableLoadStatus from "sap/ui/vtm/ViewableLoadStatus";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * Contains information about the result of an attempt to download/load a viewable.
   *
   * The {@link sap.ui.vtm.Scene.downloadCompleted} and {@link sap.ui.vtm.Scene.loadCompleted} events have
   * a `results` parameter that is passed an array of {@link sap.ui.vtm.ViewableLoadInfo} objects. {@link
   * sap.ui.vtm.Scene#getViewableLoadInfos} also returns a array of {@link sap.ui.vtm.ViewableLoadInfo} objects
   * for all viewables that have been passed into calls to {@link sap.ui.vtm.Scene#loadViewablesAsync}.
   */
  export default class ViewableLoadInfo extends UI5Element {
    /**
     * This class is not intended to be instantiated directly by application code.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor();

    /**
     * Creates a new subclass of class sap.ui.vtm.ViewableLoadInfo with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, ViewableLoadInfo>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets current value of property {@link #getErrorCode errorCode}.
     *
     * The error code describing why the Viewable failed to load.
     *
     * Use when {@link #getSucceeded} returns false.
     */
    getErrorCode(): string;
    /**
     * Gets current value of property {@link #getErrorText errorText}.
     *
     * The error text describing why the Viewable failed to load. This is an untranslated technical message.
     * Use when {@link #getSucceeded} returns false.
     */
    getErrorText(): string;
    /**
     * Returns a metadata object for class sap.ui.vtm.ViewableLoadInfo.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getStatus status}.
     *
     * The download/load status of the {@link sap.ui.vtm.Viewable} this {@link sap.ui.vtm.ViewableLoadInfo}
     * relates to.
     */
    getStatus(): ViewableLoadStatus | keyof typeof ViewableLoadStatus;
    /**
     * Gets current value of property {@link #getViewable viewable}.
     *
     * The {@link sap.ui.vtm.Viewable} this {@link sap.ui.vtm.ViewableLoadInfo} relates to.
     */
    getViewable(): object;
    /**
     * Sets a new value for property {@link #getErrorCode errorCode}.
     *
     * The error code describing why the Viewable failed to load.
     *
     * Use when {@link #getSucceeded} returns false.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setErrorCode(
      /**
       * New value for property `errorCode`
       */
      sErrorCode: string
    ): this;
    /**
     * Sets a new value for property {@link #getErrorText errorText}.
     *
     * The error text describing why the Viewable failed to load. This is an untranslated technical message.
     * Use when {@link #getSucceeded} returns false.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setErrorText(
      /**
       * New value for property `errorText`
       */
      sErrorText: string
    ): this;
    /**
     * Sets a new value for property {@link #getStatus status}.
     *
     * The download/load status of the {@link sap.ui.vtm.Viewable} this {@link sap.ui.vtm.ViewableLoadInfo}
     * relates to.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setStatus(
      /**
       * New value for property `status`
       */
      sStatus: ViewableLoadStatus | keyof typeof ViewableLoadStatus
    ): this;
    /**
     * Sets a new value for property {@link #getViewable viewable}.
     *
     * The {@link sap.ui.vtm.Viewable} this {@link sap.ui.vtm.ViewableLoadInfo} relates to.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setViewable(
      /**
       * New value for property `viewable`
       */
      oViewable: object
    ): this;
  }

  export interface $ViewableLoadInfoSettings extends $ElementSettings {
    /**
     * The {@link sap.ui.vtm.Viewable} this {@link sap.ui.vtm.ViewableLoadInfo} relates to.
     */
    viewable?: object | PropertyBindingInfo;

    /**
     * The download/load status of the {@link sap.ui.vtm.Viewable} this {@link sap.ui.vtm.ViewableLoadInfo}
     * relates to.
     */
    status?:
      | (ViewableLoadStatus | keyof typeof ViewableLoadStatus)
      | PropertyBindingInfo;

    /**
     * The error code describing why the Viewable failed to load.
     *
     * Use when {@link #getSucceeded} returns false.
     */
    errorCode?: string | PropertyBindingInfo;

    /**
     * The error text describing why the Viewable failed to load. This is an untranslated technical message.
     * Use when {@link #getSucceeded} returns false.
     */
    errorText?: string | PropertyBindingInfo;
  }
}

declare module "sap/ui/vtm/ViewableLoadStatus" {
  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * Enumeration specifying the download/load status of a {@link sap.ui.vtm.Viewable}.
   */
  enum ViewableLoadStatus {
    /**
     * The {@link sap.ui.vtm.Viewable} was downloaded successfully.
     */
    Downloaded = "Downloaded",
    /**
     * The attempt to download the {@link sap.ui.vtm.Viewable} failed.
     */
    DownloadFailed = "DownloadFailed",
    /**
     * The {@link sap.ui.vtm.Viewable} is being downloaded.
     */
    Downloading = "Downloading",
    /**
     * The {@link sap.ui.vtm.Viewable} was loaded successfully.
     */
    Loaded = "Loaded",
    /**
     * The attempt to load the {@link sap.ui.vtm.Viewable} failed.
     */
    LoadFailed = "LoadFailed",
    /**
     * The {@link sap.ui.vtm.Viewable} is being loaded.
     */
    Loading = "Loading",
  }
  export default ViewableLoadStatus;
}

declare module "sap/ui/vtm/Viewport" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import DisplayGroup from "sap/ui/vtm/DisplayGroup";

  import { ID, CSSColor } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import Panel from "sap/ui/vtm/Panel";

  import Scene from "sap/ui/vtm/Scene";

  import PredefinedView from "sap/ui/vtm/PredefinedView";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * A control that contains a 3D viewport.
   */
  export default class Viewport extends Control {
    /**
     * This class is not intended to be instantiated directly by application code. A {@link sap.ui.vtm.Viewport}
     * object is created when a {@link sap.ui.vtm.Panel} object is instantiated.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor();

    /**
     * Adds an override display group to the `overrideDisplayGroups` property.
     */
    addContextDisplayGroup(
      /**
       * The context display group to add to the `contextDisplayGroups` property.
       */
      contextDisplayGroup: DisplayGroup
    ): Viewport;
    /**
     * Adds some headerControl into the association {@link #getHeaderControls headerControls}.
     */
    addHeaderControl(
      /**
       * The headerControls to add; if empty, nothing is inserted
       */
      vHeaderControl: ID | Control
    ): this;
    /**
     * Adds an override display group to the `overrideDisplayGroups` property.
     */
    addOverrideDisplayGroup(
      /**
       * The override display group to add to the `overrideDisplayGroups` property.
       */
      overrideDisplayGroup: DisplayGroup
    ): Viewport;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:beginGesture beginGesture} event of this `sap.ui.vtm.Viewport`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Viewport` itself.
     *
     * Raised when a gesture begins.
     */
    attachBeginGesture(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Viewport` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:endGesture endGesture} event of this `sap.ui.vtm.Viewport`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Viewport` itself.
     *
     * Raised when a gesture ends.
     */
    attachEndGesture(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Viewport` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:hover hover} event of this `sap.ui.vtm.Viewport`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Viewport` itself.
     *
     * Raised on mouse move over viewport.
     */
    attachHover(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Viewport` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:nodeClicked nodeClicked} event of this `sap.ui.vtm.Viewport`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Viewport` itself.
     *
     * Raised when a node in the viewport is clicked.
     */
    attachNodeClicked(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Viewport` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:refreshRequested refreshRequested} event of
     * this `sap.ui.vtm.Viewport`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Viewport` itself.
     *
     * Raised when {@link sap.ui.vk.dvl.Viewport#refresh refresh} is called. This event can be used by code
     * that is managing the viewport display state.
     */
    attachRefreshRequested(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Viewport` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:selectionChanged selectionChanged} event of
     * this `sap.ui.vtm.Viewport`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Viewport` itself.
     *
     * Raised when the selection is changed due to a click in the viewport (either on a node or in empty space).
     */
    attachSelectionChanged(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Viewport` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:viewChanged viewChanged} event of this `sap.ui.vtm.Viewport`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Viewport` itself.
     *
     * Raised when viewport's camera view changed.
     */
    attachViewChanged(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Viewport` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:visibilityChanged visibilityChanged} event of
     * this `sap.ui.vtm.Viewport`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Viewport` itself.
     *
     * Raised when the visibility of scene nodes changed in the viewport.
     */
    attachVisibilityChanged(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Viewport` itself
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:beginGesture beginGesture} event of this `sap.ui.vtm.Viewport`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachBeginGesture(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:endGesture endGesture} event of this `sap.ui.vtm.Viewport`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachEndGesture(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:hover hover} event of this `sap.ui.vtm.Viewport`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachHover(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:nodeClicked nodeClicked} event of this `sap.ui.vtm.Viewport`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachNodeClicked(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:refreshRequested refreshRequested} event of
     * this `sap.ui.vtm.Viewport`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachRefreshRequested(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:selectionChanged selectionChanged} event of
     * this `sap.ui.vtm.Viewport`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachSelectionChanged(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:viewChanged viewChanged} event of this `sap.ui.vtm.Viewport`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachViewChanged(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:visibilityChanged visibilityChanged} event
     * of this `sap.ui.vtm.Viewport`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachVisibilityChanged(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Creates a new subclass of class sap.ui.vtm.Viewport with name `sClassName` and enriches it with the information
     * contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, Viewport>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Fires event {@link #event:beginGesture beginGesture} to attached listeners.
     */
    fireBeginGesture(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:endGesture endGesture} to attached listeners.
     */
    fireEndGesture(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:hover hover} to attached listeners.
     */
    fireHover(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Mouse X-coordinate within viewport
         */
        x?: float;
        /**
         * Mouse Y-coordinate within viewport
         */
        y?: float;
        /**
         * The ID of the node that is under the viewport coordinates (x, y).
         */
        nodeId?: string;
      }
    ): this;
    /**
     * Fires event {@link #event:nodeClicked nodeClicked} to attached listeners.
     */
    fireNodeClicked(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:refreshRequested refreshRequested} to attached listeners.
     */
    fireRefreshRequested(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:selectionChanged selectionChanged} to attached listeners.
     */
    fireSelectionChanged(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * IDs of newly selected nodes.
         */
        selectedIds?: string[];
        /**
         * IDs of newly unselected nodes.
         */
        unselectedIds?: string[];
        /**
         * `true` if this event is raised as a result of a user clicking in the viewport.
         */
        userInteraction?: boolean;
      }
    ): this;
    /**
     * Fires event {@link #event:viewChanged viewChanged} to attached listeners.
     */
    fireViewChanged(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Information about the current camera view. Can be passed to {@link sap.ui.vk.dvl.Viewport#setCameraInfo
         * setCameraInfo}.
         */
        cameraInfo?: object;
      }
    ): this;
    /**
     * Fires event {@link #event:visibilityChanged visibilityChanged} to attached listeners.
     */
    fireVisibilityChanged(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The IDs of newly shown nodes.
         */
        visibleIds?: string[];
        /**
         * The IDs of newly hidden nodes.
         */
        hiddenIds?: string[];
        /**
         * `true` if this event is raised as a result of a user clicking in the viewport.
         */
        userInteraction?: boolean;
      }
    ): this;
    /**
     * Gets current value of property {@link #getBackgroundGradientBottomColor backgroundGradientBottomColor}.
     *
     * The background gradient bottom color
     *
     * Default value is `"white"`.
     */
    getBackgroundGradientBottomColor(): CSSColor;
    /**
     * Gets current value of property {@link #getBackgroundGradientTopColor backgroundGradientTopColor}.
     *
     * The background gradient top color.
     *
     * Default value is `"black"`.
     */
    getBackgroundGradientTopColor(): CSSColor;
    /**
     * Retrieves an object containing the current camera information for this viewport.
     *
     * This value can then be passed to {@link sap.ui.vtm.Viewport#setCameraInfo setCameraInfo} to restore the
     * camera position at a later point in time.
     */
    getCameraInfo(): object;
    /**
     * Gets current value of property {@link #getContextDisplayGroups contextDisplayGroups}.
     *
     * Allows the calculated display state for scene nodes whose display state is not determined by tree item
     * associations or override display groups to be specified.
     *
     * A set of {@link sap.ui.vtm.DisplayGroup} objects objects that describe display states to apply to scene
     * nodes. Precedence is inherent in the array ordering. Call {@link #refresh} to recalculate the display
     * state in the viewport after modifying override display groups.
     *
     * Default value is `[]`.
     */
    getContextDisplayGroups(): object[];
    /**
     * Returns array of IDs of the elements which are the current targets of the association {@link #getHeaderControls
     * headerControls}.
     */
    getHeaderControls(): ID[];
    /**
     * Gets the highlight colors for a set of scene nodes in this viewport.
     */
    getHighlightColor(
      /**
       * A scene node ID or an array of scene node IDs.
       */
      sceneNodeIds: string | string[]
    ): CSSColor | CSSColor[];
    /**
     * Returns whether the {@link sap.ui.vtm.Viewport} has been initialized.
     */
    getInitialized(): boolean;
    /**
     * Returns a metadata object for class sap.ui.vtm.Viewport.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets the opacity for a set of scene nodes in this viewport. Opacity is specified as a floating point
     * value in the interval [0,1].
     */
    getOpacity(
      /**
       * A scene node ID or an array of scene node IDs.
       */
      sceneNodeIds: string | string[]
    ): number | number[];
    /**
     * Gets current value of property {@link #getOverrideDisplayGroups overrideDisplayGroups}.
     *
     * Allows the calculated display state of scene nodes in the viewport o be overridden.
     *
     * A set of {@link sap.ui.vtm.DisplayGroup} objects that each specify the display state for a set of scene
     * nodes. Precedence is inherent in the array ordering. Any display state specified in this way takes precedence
     * over display states specified for geometry associated with tree items or specified using {@link #contextGroups}.
     * Call {@link #refresh} to recalculate the display state in the viewport after modifying override display
     * groups.
     *
     * Default value is `[]`.
     */
    getOverrideDisplayGroups(): object[];
    /**
     * Gets the panel this viewport belongs to.
     */
    getPanel(): Panel;
    /**
     * Gets the {@link sap.ui.vtm.Scene} used by this {@link sap.ui.vtm.Viewport}.
     */
    getScene(): Scene;
    /**
     * Gets the selection state for a set of scene nodes in this viewport.
     */
    getSelected(
      /**
       * A scene node ID or an array of scene node IDs.
       */
      sceneNodeIds: string | string[]
    ): boolean | boolean[];
    /**
     * Gets the IDs of the scene nodes that are selected in this viewport.
     */
    getSelectedIds(): string[];
    /**
     * Gets the visibility state for a set of scene nodes in this viewport.
     */
    getVisibility(
      /**
       * A scene node ID or an array of scene node IDs.
       */
      sceneNodeIds: string | string[]
    ): boolean | boolean[];
    /**
     * Fires a `refreshRequested` event.
     */
    refresh(): Viewport;
    /**
     * Removes all the controls in the association named {@link #getHeaderControls headerControls}.
     */
    removeAllHeaderControls(): ID[];
    /**
     * Removes an headerControl from the association named {@link #getHeaderControls headerControls}.
     */
    removeHeaderControl(
      /**
       * The headerControl to be removed or its index or ID
       */
      vHeaderControl: int | ID | Control
    ): ID;
    /**
     * Sets a new value for property {@link #getBackgroundGradientBottomColor backgroundGradientBottomColor}.
     *
     * The background gradient bottom color
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"white"`.
     */
    setBackgroundGradientBottomColor(
      /**
       * New value for property `backgroundGradientBottomColor`
       */
      sBackgroundGradientBottomColor?: CSSColor
    ): this;
    /**
     * Sets a new value for property {@link #getBackgroundGradientTopColor backgroundGradientTopColor}.
     *
     * The background gradient top color.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"black"`.
     */
    setBackgroundGradientTopColor(
      /**
       * New value for property `backgroundGradientTopColor`
       */
      sBackgroundGradientTopColor?: CSSColor
    ): this;
    /**
     * Updates the camera for this viewport.
     */
    setCameraInfo(
      /**
       * An object containing camera information returned by {@link sap.ui.vtm.Viewport#getCameraInfo getCameraInfo}.
       */
      cameraInfo: object,
      /**
       * A duration in seconds for the transition to the new camera position. Defaults to 0.
       */
      flyToDuration: float
    ): Viewport;
    /**
     * Sets a new value for property {@link #getContextDisplayGroups contextDisplayGroups}.
     *
     * Allows the calculated display state for scene nodes whose display state is not determined by tree item
     * associations or override display groups to be specified.
     *
     * A set of {@link sap.ui.vtm.DisplayGroup} objects objects that describe display states to apply to scene
     * nodes. Precedence is inherent in the array ordering. Call {@link #refresh} to recalculate the display
     * state in the viewport after modifying override display groups.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `[]`.
     */
    setContextDisplayGroups(
      /**
       * New value for property `contextDisplayGroups`
       */
      sContextDisplayGroups?: object[]
    ): this;
    /**
     * Sets the highlight color for a set of scene nodes in this viewport.
     *
     * This method should not be called by application code when an extension implementing {@link sap.ui.vtm.interfaces.IDisplayStateCalculationExtension}
     * is being used. In that case the extension implementing {@link sap.ui.vtm.interfaces.IDisplayStateCalculationExtension}
     * should perform all management of scene node visibility in the viewports.
     */
    setHighlightColor(
      /**
       * A scene node ID or an array of scene node IDs.
       */
      sceneNodeIds: string | string[],
      /**
       * The highlight color to apply to the relevant scene nodes. If null, the highlight color is removed.
       *  The alpha component of the color controls the blending ratio between the highlight color and the geometry
       * color.
       */
      color: CSSColor | null,
      /**
       * If true the specified highlight color will be applied to the descendants of the specified scene nodes.
       */
      recursive: boolean
    ): Viewport;
    /**
     * Sets the opacity for a set of scene nodes in this viewport. Opacity is specified as a floating point
     * value in the interval [0,1].
     *
     * This method should not be called by application code when an extension implementing {@link sap.ui.vtm.interfaces.IDisplayStateCalculationExtension}
     * is being used. In that case the extension implementing {@link sap.ui.vtm.interfaces.IDisplayStateCalculationExtension}
     * should perform all management of scene node visibility in the viewports.
     */
    setOpacity(
      /**
       * A scene node ID or an array of scene node IDs.
       */
      sceneNodeIds: string | string[],
      /**
       * The opacity state to apply to the relevant scene nodes.
       */
      opacity: number,
      /**
       * If true the specified opacity state will be applied to the descendants of the specified scene nodes.
       */
      recursive: boolean
    ): Viewport;
    /**
     * Sets a new value for property {@link #getOverrideDisplayGroups overrideDisplayGroups}.
     *
     * Allows the calculated display state of scene nodes in the viewport o be overridden.
     *
     * A set of {@link sap.ui.vtm.DisplayGroup} objects that each specify the display state for a set of scene
     * nodes. Precedence is inherent in the array ordering. Any display state specified in this way takes precedence
     * over display states specified for geometry associated with tree items or specified using {@link #contextGroups}.
     * Call {@link #refresh} to recalculate the display state in the viewport after modifying override display
     * groups.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `[]`.
     */
    setOverrideDisplayGroups(
      /**
       * New value for property `overrideDisplayGroups`
       */
      sOverrideDisplayGroups?: object[]
    ): this;
    /**
     * Sets the view in the current viewport to one of the predefined views.
     */
    setPredefinedView(
      /**
       * The predefined view to apply.
       */
      view: PredefinedView
    ): Viewport;
    /**
     * Sets the selection state for a set of scene nodes in this viewport.
     *
     * This method should not be called by application code when an extension implementing {@link sap.ui.vtm.interfaces.IViewportSelectionLinkingExtension}
     * is being used. In that case the extension implementing {@link sap.ui.vtm.interfaces.IViewportSelectionLinkingExtension}
     * should perform all management of scene node selection in the viewports.
     */
    setSelected(
      /**
       * A scene node ID or an array of scene node IDs.
       */
      sceneNodeIds: string | string[],
      /**
       * The new selection state of the nodes.
       */
      selected: boolean,
      /**
       * The flags indicates if the change needs to propagate recursively to child nodes.
       */
      recursive: boolean
    ): Viewport;
    /**
     * Sets the visibility state for a set of scene nodes in this viewport.
     *
     * This method should not be called by application code when an extension implementing {@link sap.ui.vtm.interfaces.IDisplayStateCalculationExtension}
     * is being used. In that case the extension implementing {@link sap.ui.vtm.interfaces.IDisplayStateCalculationExtension}
     * should perform all management of scene node visibility in the viewports.
     */
    setVisibility(
      /**
       * A scene node ID or an array of scene node IDs.
       */
      sceneNodeIds: string | string[],
      /**
       * The visibility state to apply to the relevant scene nodes.
       */
      visibility: boolean,
      /**
       * If true the specified visibility state will be applied to the descendants of the specified scene nodes.
       */
      recursive: boolean
    ): Viewport;
    /**
     * Zooms to a view in the current viewport that can fit all geometry in the scene (visible or not).
     */
    zoomToAll(
      /**
       * The duration of the zoom animation in seconds.
       */
      durationInSeconds: number
    ): Viewport;
    /**
     * Calls {@link sap.ui.vtm.Viewport#zoomToSelected zoomToSelected} if any geometry is selected in this viewport,
     * otherwise calls {@link sap.ui.vtm.Viewport#zoomToAll zoomToAll}.
     */
    zoomToFit(
      /**
       * The duration of the zoom animation in seconds.
       */
      durationInSeconds: number
    ): Viewport;
    /**
     * Zooms to the set of geometry that is selected in the current viewport. If no geometry is selected, no
     * action is taken.
     */
    zoomToSelected(
      /**
       * The duration of the zoom animation in seconds.
       */
      durationInSeconds: number
    ): Viewport;
    /**
     * Zooms to the set of geometry that is visible in the current viewport. If no geometry is visible, this
     * zooms to all geometry in the current viewport.
     */
    zoomToVisible(
      /**
       * The duration of the zoom animation in seconds.
       */
      durationInSeconds: number
    ): Viewport;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:beginGesture beginGesture} event of this `sap.ui.vtm.Viewport`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Viewport` itself.
     *
     * Raised when a gesture begins.
     */
    attachBeginGesture(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Viewport` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:endGesture endGesture} event of this `sap.ui.vtm.Viewport`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Viewport` itself.
     *
     * Raised when a gesture ends.
     */
    attachEndGesture(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Viewport` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:hover hover} event of this `sap.ui.vtm.Viewport`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Viewport` itself.
     *
     * Raised on mouse move over viewport.
     */
    attachHover(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Viewport` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:nodeClicked nodeClicked} event of this `sap.ui.vtm.Viewport`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Viewport` itself.
     *
     * Raised when a node in the viewport is clicked.
     */
    attachNodeClicked(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Viewport` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:refreshRequested refreshRequested} event of
     * this `sap.ui.vtm.Viewport`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Viewport` itself.
     *
     * Raised when {@link sap.ui.vk.dvl.Viewport#refresh refresh} is called. This event can be used by code
     * that is managing the viewport display state.
     */
    attachRefreshRequested(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Viewport` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:selectionChanged selectionChanged} event of
     * this `sap.ui.vtm.Viewport`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Viewport` itself.
     *
     * Raised when the selection is changed due to a click in the viewport (either on a node or in empty space).
     */
    attachSelectionChanged(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Viewport` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:viewChanged viewChanged} event of this `sap.ui.vtm.Viewport`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Viewport` itself.
     *
     * Raised when viewport's camera view changed.
     */
    attachViewChanged(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Viewport` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:visibilityChanged visibilityChanged} event of
     * this `sap.ui.vtm.Viewport`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Viewport` itself.
     *
     * Raised when the visibility of scene nodes changed in the viewport.
     */
    attachVisibilityChanged(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Viewport` itself
       */
      oListener?: object
    ): this;
  }

  export interface $ViewportSettings extends $ControlSettings {
    /**
     * The background gradient top color.
     */
    backgroundGradientTopColor?: CSSColor | PropertyBindingInfo;

    /**
     * The background gradient bottom color
     */
    backgroundGradientBottomColor?: CSSColor | PropertyBindingInfo;

    /**
     * Allows the calculated display state of scene nodes in the viewport o be overridden.
     *
     * A set of {@link sap.ui.vtm.DisplayGroup} objects that each specify the display state for a set of scene
     * nodes. Precedence is inherent in the array ordering. Any display state specified in this way takes precedence
     * over display states specified for geometry associated with tree items or specified using {@link #contextGroups}.
     * Call {@link #refresh} to recalculate the display state in the viewport after modifying override display
     * groups.
     */
    overrideDisplayGroups?: object[] | PropertyBindingInfo;

    /**
     * Allows the calculated display state for scene nodes whose display state is not determined by tree item
     * associations or override display groups to be specified.
     *
     * A set of {@link sap.ui.vtm.DisplayGroup} objects objects that describe display states to apply to scene
     * nodes. Precedence is inherent in the array ordering. Call {@link #refresh} to recalculate the display
     * state in the viewport after modifying override display groups.
     */
    contextDisplayGroups?: object[] | PropertyBindingInfo;

    /**
     * A set of controls such as toolbars to appear above the 3D viewport.
     */
    headerControls?: Array<Control | string>;

    /**
     * Raised when the selection is changed due to a click in the viewport (either on a node or in empty space).
     */
    selectionChanged?: Function;

    /**
     * Raised when a node in the viewport is clicked.
     */
    nodeClicked?: Function;

    /**
     * Raised when the visibility of scene nodes changed in the viewport.
     */
    visibilityChanged?: Function;

    /**
     * Raised when viewport's camera view changed.
     */
    viewChanged?: Function;

    /**
     * Raised when {@link sap.ui.vk.dvl.Viewport#refresh refresh} is called. This event can be used by code
     * that is managing the viewport display state.
     */
    refreshRequested?: Function;

    /**
     * Raised on mouse move over viewport.
     */
    hover?: Function;

    /**
     * Raised when a gesture begins.
     */
    beginGesture?: Function;

    /**
     * Raised when a gesture ends.
     */
    endGesture?: Function;
  }
}

declare module "sap/ui/vtm/Vtm" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import Extension from "sap/ui/vtm/Extension";

  import Panel from "sap/ui/vtm/Panel";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import Scene from "sap/ui/vtm/Scene";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @EXPERIMENTAL (since 1.50.0)
   *
   * The main entry point for constructing VTM controls.
   */
  export default class Vtm extends UI5Element {
    /**
     * Constructor for a new Vtm. This constructor can be used to construct an instance of {@link sap.ui.vtm.Vtm}
     * with a specific set of extensions. Alternatively {@link sap.ui.vtm.createVtm} can be used to create a
     * {@link sap.ui.vtm.Vtm} instance with a default set of extensions.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * The id to use for the {@link sap.ui.vtm.Vtm} instance.
       */
      sId: string,
      /**
       * A set of settings for the {@link sap.ui.vtm.Vtm} instance (normally used to populate the `extensions`
       * aggregation).
       */
      mSettings: $VtmSettings
    );

    /**
     * Adds some extension to the aggregation {@link #getExtensions extensions}.
     */
    addExtension(
      /**
       * The extension to add; if empty, nothing is inserted
       */
      oExtension: Extension
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:activePanelChanged activePanelChanged} event
     * of this `sap.ui.vtm.Vtm`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Vtm` itself.
     *
     * Raised when the active panel has changed.
     */
    attachActivePanelChanged(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Vtm` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:initialized initialized} event of this `sap.ui.vtm.Vtm`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Vtm` itself.
     *
     * Raised when this {@link sap.ui.vtm.Vtm} instance and its extensions have been initialized.
     *
     * Applications should add event handlers after the {@link sap.ui.vtm.Vtm} instance has initialized so that
     * the extensions can attach event handlers before the application attempts to attach event handlers to
     * the same events.
     */
    attachInitialized(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Vtm` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:panelAdded panelAdded} event of this `sap.ui.vtm.Vtm`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Vtm` itself.
     *
     * Raised when a panel has been added.
     */
    attachPanelAdded(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Vtm` itself
       */
      oListener?: object
    ): this;
    /**
     * Creates a VTM panel associated with this {@link sap.ui.vtm.Vtm} instance.
     */
    createPanel(
      /**
       * The ID to pass to the panel constructor.
       */
      sId: string,
      /**
       * The settings to pass to the panel constructor.
       */
      mSettings: object
    ): Panel;
    /**
     * Destroys all the extensions in the aggregation {@link #getExtensions extensions}.
     */
    destroyExtensions(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:activePanelChanged activePanelChanged} event
     * of this `sap.ui.vtm.Vtm`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachActivePanelChanged(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:initialized initialized} event of this `sap.ui.vtm.Vtm`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachInitialized(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:panelAdded panelAdded} event of this `sap.ui.vtm.Vtm`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachPanelAdded(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Creates a new subclass of class sap.ui.vtm.Vtm with name `sClassName` and enriches it with the information
     * contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, Vtm>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Fires event {@link #event:activePanelChanged activePanelChanged} to attached listeners.
     */
    fireActivePanelChanged(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:initialized initialized} to attached listeners.
     */
    fireInitialized(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:panelAdded panelAdded} to attached listeners.
     */
    firePanelAdded(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        panel?: Panel;
      }
    ): this;
    /**
     * Gets the active panel.
     */
    getActivePanel(): Panel | null;
    /**
     * Gets current value of property {@link #getAddDefaultExtensions addDefaultExtensions}.
     *
     * When true populates the `extensions` aggregation with the default set of extensions in the default configuration.
     */
    getAddDefaultExtensions(): boolean;
    /**
     * Gets the extension implementing a specified interface.
     *
     * Returns `undefined` if there is not exactly one matching extension.
     */
    getExtensionByInterface(
      /**
       * The fully qualified name of the interface.
       */
      sInterfaceName: string
    ): Extension | undefined;
    /**
     * Gets an extension with a specified class name.
     *
     * Returns `undefined` if there is not exactly one matching extension.
     */
    getExtensionByName(
      /**
       * The fully qualified class name of the extension.
       */
      sExtensionName: string
    ): Extension | undefined;
    /**
     * Gets content of aggregation {@link #getExtensions extensions}.
     *
     * The set of VTM extensions. Extensions are used to provide extensibility. Default behaviors are implemented
     * as extensions that can be replaced.
     */
    getExtensions(): Extension[];
    /**
     * Gets the extensions implementing a specified interface.
     */
    getExtensionsByInterface(
      /**
       * The fully qualified name of the interface.
       */
      sInterfaceName: string
    ): Extension[];
    /**
     * Gets the extensions with a specified class name.
     */
    getExtensionsByName(
      /**
       * The fully qualified class name of the extension.
       */
      sExtensionName: string
    ): Extension[];
    /**
     * Returns a metadata object for class sap.ui.vtm.Vtm.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets a panel given its id. Returns undefined if no match is found.
     */
    getPanel(
      /**
       * The id of the panel to find.
       */
      panelId: string
    ): Panel | undefined;
    /**
     * Gets the set of created panels. Do not modify the returned array.
     */
    getPanels(): Panel[];
    /**
     * Gets the scene.
     */
    getScene(): Scene;
    /**
     * Checks for the provided `sap.ui.vtm.Extension` in the aggregation {@link #getExtensions extensions}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfExtension(
      /**
       * The extension whose index is looked for
       */
      oExtension: Extension
    ): int;
    /**
     * Inserts a extension into the aggregation {@link #getExtensions extensions}.
     */
    insertExtension(
      /**
       * The extension to insert; if empty, nothing is inserted
       */
      oExtension: Extension,
      /**
       * The `0`-based index the extension should be inserted at; for a negative value of `iIndex`, the extension
       * is inserted at position 0; for a value greater than the current size of the aggregation, the extension
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getExtensions extensions}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllExtensions(): Extension[];
    /**
     * Removes a extension from the aggregation {@link #getExtensions extensions}.
     */
    removeExtension(
      /**
       * The extension to remove or its index or id
       */
      vExtension: int | string | Extension
    ): Extension;
    /**
     * Sets the active panel.
     */
    setActivePanel(
      /**
       * The active panel.
       */
      oActivePanel: Panel
    ): Vtm;
    /**
     * Sets a new value for property {@link #getAddDefaultExtensions addDefaultExtensions}.
     *
     * When true populates the `extensions` aggregation with the default set of extensions in the default configuration.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setAddDefaultExtensions(
      /**
       * New value for property `addDefaultExtensions`
       */
      bAddDefaultExtensions: boolean
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:activePanelChanged activePanelChanged} event
     * of this `sap.ui.vtm.Vtm`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Vtm` itself.
     *
     * Raised when the active panel has changed.
     */
    attachActivePanelChanged(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Vtm` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:initialized initialized} event of this `sap.ui.vtm.Vtm`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Vtm` itself.
     *
     * Raised when this {@link sap.ui.vtm.Vtm} instance and its extensions have been initialized.
     *
     * Applications should add event handlers after the {@link sap.ui.vtm.Vtm} instance has initialized so that
     * the extensions can attach event handlers before the application attempts to attach event handlers to
     * the same events.
     */
    attachInitialized(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Vtm` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:panelAdded panelAdded} event of this `sap.ui.vtm.Vtm`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.vtm.Vtm` itself.
     *
     * Raised when a panel has been added.
     */
    attachPanelAdded(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.vtm.Vtm` itself
       */
      oListener?: object
    ): this;
  }

  export interface $VtmSettings extends $ElementSettings {
    /**
     * When true populates the `extensions` aggregation with the default set of extensions in the default configuration.
     */
    addDefaultExtensions?: boolean | PropertyBindingInfo;

    /**
     * The set of VTM extensions. Extensions are used to provide extensibility. Default behaviors are implemented
     * as extensions that can be replaced.
     */
    extensions?: Extension[] | Extension | AggregationBindingInfo;

    /**
     * Raised when a panel has been added.
     */
    panelAdded?: Function;

    /**
     * Raised when the active panel has changed.
     */
    activePanelChanged?: Function;

    /**
     * Raised when this {@link sap.ui.vtm.Vtm} instance and its extensions have been initialized.
     *
     * Applications should add event handlers after the {@link sap.ui.vtm.Vtm} instance has initialized so that
     * the extensions can attach event handlers before the application attempts to attach event handlers to
     * the same events.
     */
    initialized?: Function;
  }
}

declare namespace sap {
  namespace ui {
    /**
     * @EXPERIMENTAL (since 1.50.0)
     *
     * SAPUI5 library with controls to visualize, map and restructure hierarchical business data that maps to
     * 3D objects.
     */
    namespace vtm {
      /**
       * The AXIS1X component.
       */
      export const AXIS1X: int;

      /**
       * The AXIS1Y component.
       */
      export const AXIS1Y: int;

      /**
       * The AXIS1Z component.
       */
      export const AXIS1Z: int;

      /**
       * The AXIS2X component.
       */
      export const AXIS2X: int;

      /**
       * The AXIS2Y component.
       */
      export const AXIS2Y: int;

      /**
       * The AXIS2Z component.
       */
      export const AXIS2Z: int;

      /**
       * The AXIS3X component.
       */
      export const AXIS3X: int;

      /**
       * The AXIS3Y component.
       */
      export const AXIS3Y: int;

      /**
       * The AXIS3Z component.
       */
      export const AXIS3Z: int;

      /**
       * The LOCX (X axis translation) component.
       */
      export const LOCX: int;

      /**
       * The LOCY (Y axis translation) component.
       */
      export const LOCY: int;

      /**
       * The LOCZ (Z axis translation) component.
       */
      export const LOCZ: int;

      /**
       * The SCALE component (there is only one scale component for all axes).
       */
      export const SCALE: int;

      /**
       * Creates an instance of {@link sap.ui.vtm.Vtm} with a default set of extensions.
       *
       * The {@link sap.ui.vtm.Vtm} constructor can be used to create an instance of {@link sap.ui.vtm.Vtm} with
       * a specific set of extensions.
       */
      function createVtm(
        /**
         * The id to pass to the {@link sap.ui.vtm.Vtm} constructor.
         */
        sId: string,
        /**
         * The settings to pass to the {@link sap.ui.vtm.Vtm} constructor. Any extensions specified in the settings
         * will be replaced with a default set.
         */
        mSettings: object
      ): import("sap/ui/vtm/Vtm").default;
    }
  }

  interface IUI5DefineDependencyNames {
    "sap/ui/vtm/ArrayUtilities": undefined;

    "sap/ui/vtm/ChildCollectionType": undefined;

    "sap/ui/vtm/Column": undefined;

    "sap/ui/vtm/ColumnType": undefined;

    "sap/ui/vtm/DescriptorUtilities": undefined;

    "sap/ui/vtm/DisplayGroup": undefined;

    "sap/ui/vtm/Extension": undefined;

    "sap/ui/vtm/extensions/DisplayStateCalculationExtension": undefined;

    "sap/ui/vtm/extensions/InitialViewExtension": undefined;

    "sap/ui/vtm/extensions/LoadProgressExtension": undefined;

    "sap/ui/vtm/extensions/MessageStatusCalculationExtension": undefined;

    "sap/ui/vtm/extensions/MessageStatusIconClickExtension": undefined;

    "sap/ui/vtm/extensions/SceneNodeHoverHighlightExtension": undefined;

    "sap/ui/vtm/extensions/SceneNodeHoverTooltipExtension": undefined;

    "sap/ui/vtm/extensions/SelectionLinkingExtension": undefined;

    "sap/ui/vtm/extensions/ViewLinkingExtension": undefined;

    "sap/ui/vtm/extensions/ViewportSelectionLinkingExtension": undefined;

    "sap/ui/vtm/extensions/VisibilityIconClickExtension": undefined;

    "sap/ui/vtm/HashUtilities": undefined;

    "sap/ui/vtm/InternalColumnDescriptor": undefined;

    "sap/ui/vtm/InternalColumns": undefined;

    "sap/ui/vtm/library": undefined;

    "sap/ui/vtm/Lookup": undefined;

    "sap/ui/vtm/MatrixUtilities": undefined;

    "sap/ui/vtm/MessagesPopover": undefined;

    "sap/ui/vtm/Panel": undefined;

    "sap/ui/vtm/PredefinedView": undefined;

    "sap/ui/vtm/ProgressDialog": undefined;

    "sap/ui/vtm/Scene": undefined;

    "sap/ui/vtm/SceneNode": undefined;

    "sap/ui/vtm/SelectColumnsDialog": undefined;

    "sap/ui/vtm/SelectionMode": undefined;

    "sap/ui/vtm/TextColor": undefined;

    "sap/ui/vtm/Tree": undefined;

    "sap/ui/vtm/TreeItemType": undefined;

    "sap/ui/vtm/TreeItemUtilities": undefined;

    "sap/ui/vtm/Viewable": undefined;

    "sap/ui/vtm/ViewableLoadInfo": undefined;

    "sap/ui/vtm/ViewableLoadStatus": undefined;

    "sap/ui/vtm/Viewport": undefined;

    "sap/ui/vtm/Vtm": undefined;
  }
}
