VERSION 5.00
Object = "{CDE57A40-8B86-11D0-B3C6-00A0C90AEA82}#1.0#0"; "MSDATGRD.OCX"
Begin VB.Form Form12 
   ClientHeight    =   3585
   ClientLeft      =   6585
   ClientTop       =   3360
   ClientWidth     =   7665
   ControlBox      =   0   'False
   LinkTopic       =   "Form12"
   Picture         =   "Form12.frx":0000
   ScaleHeight     =   3585
   ScaleWidth      =   7665
   Begin VB.ComboBox Combo2 
      Height          =   315
      ItemData        =   "Form12.frx":16B1D
      Left            =   8040
      List            =   "Form12.frx":16B2D
      TabIndex        =   6
      Top             =   1560
      Width           =   3855
   End
   Begin VB.CommandButton Command1 
      Caption         =   "OK"
      Default         =   -1  'True
      BeginProperty Font 
         Name            =   "Times New Roman"
         Size            =   9.75
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   255
      Left            =   5160
      TabIndex        =   2
      Top             =   3000
      Width           =   2175
   End
   Begin VB.PictureBox Picture1 
      Height          =   3015
      Left            =   0
      Picture         =   "Form12.frx":16B50
      ScaleHeight     =   2955
      ScaleWidth      =   7635
      TabIndex        =   1
      Top             =   600
      Width           =   7695
      Begin VB.ComboBox Combo1 
         BeginProperty Font 
            Name            =   "Georgia"
            Size            =   18
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   555
         Left            =   840
         TabIndex        =   5
         Top             =   1680
         Width           =   4935
      End
      Begin VB.TextBox Text1 
         Height          =   495
         Left            =   840
         TabIndex        =   0
         Top             =   1680
         Width           =   4935
      End
      Begin VB.Label Label2 
         BackStyle       =   0  'Transparent
         BeginProperty Font 
            Name            =   "Gabriola"
            Size            =   18
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   495
         Left            =   840
         TabIndex        =   4
         Top             =   840
         Width           =   4095
      End
   End
   Begin MSDataGridLib.DataGrid DataGrid1 
      Height          =   2895
      Left            =   0
      TabIndex        =   7
      Top             =   3720
      Width           =   12015
      _ExtentX        =   21193
      _ExtentY        =   5106
      _Version        =   393216
      HeadLines       =   1
      RowHeight       =   15
      BeginProperty HeadFont {0BE35203-8F91-11CE-9DE3-00AA004BB851} 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      BeginProperty Font {0BE35203-8F91-11CE-9DE3-00AA004BB851} 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ColumnCount     =   2
      BeginProperty Column00 
         DataField       =   ""
         Caption         =   ""
         BeginProperty DataFormat {6D835690-900B-11D0-9484-00A0C91110ED} 
            Type            =   0
            Format          =   ""
            HaveTrueFalseNull=   0
            FirstDayOfWeek  =   0
            FirstWeekOfYear =   0
            LCID            =   1033
            SubFormatType   =   0
         EndProperty
      EndProperty
      BeginProperty Column01 
         DataField       =   ""
         Caption         =   ""
         BeginProperty DataFormat {6D835690-900B-11D0-9484-00A0C91110ED} 
            Type            =   0
            Format          =   ""
            HaveTrueFalseNull=   0
            FirstDayOfWeek  =   0
            FirstWeekOfYear =   0
            LCID            =   1033
            SubFormatType   =   0
         EndProperty
      EndProperty
      SplitCount      =   1
      BeginProperty Split0 
         BeginProperty Column00 
         EndProperty
         BeginProperty Column01 
         EndProperty
      EndProperty
   End
   Begin VB.Label Label1 
      BackStyle       =   0  'Transparent
      BeginProperty Font 
         Name            =   "Gabriola"
         Size            =   18
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   495
      Left            =   0
      TabIndex        =   3
      Top             =   120
      Width           =   6615
   End
End
Attribute VB_Name = "Form12"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Private Sub Combo1_Click()
For t = 1 To rec2.RecordCount
v1 = Mid(Combo1.Text, t, 1)
If v1 = "-" Then
GoTo l1
Else
v3 = v3 & v1
End If
Next
l1:
MsgBox (v3)
Text1.Text = Trim(v3)
End Sub

Private Sub Combo2_Click()
If rec5.State = 1 Then rec5.Close
rec5.open "select * from " & Combo2 & "", con, 3, 2

Set DataGrid1.DataSource = rec5
End Sub

Private Sub Command1_Click()
Form12.Hide
End Sub

Private Sub Form_DblClick()
Me.Width = 7905
Me.Height = 3825
End Sub

Private Sub Form_Load()
Combo1.Visible = False
End Sub

Private Sub Label2_Change()
l = Len(Label2.Caption)
For t = 1 To l
u1 = Mid(Label2.Caption, t, 1)
If u1 = "_" Then
GoTo l
Else
u3 = u3 & u1
End If
Next
l:
u2 = Mid(Label2.Caption, t + 1, l)
If u2 = "id" Or u2 = "ID" Then
Combo1.Visible = True
If rec2.State = 1 Then
rec2.Close
End If
rec2.open "select * from " & u3, con, adOpenKeyset, adLockOptimistic
For t = 1 To rec2.RecordCount
If rec2.EOF <> True Then
If u3 = "COLOUR" Then
If t = 1 Then
l1 = Len(rec2.Fields(2).Name)
For k = 1 To l1
X1 = Mid(rec2.Fields(2).Name, k, 1)
If X1 = "_" Then
GoTo l1
Else
x3 = x3 & X1
End If
Next
l1:
End If
If rec3.State = 1 Then
rec3.Close
End If
x = "select *  from " & x3 & " where " & rec2.Fields(2).Name & " = '" & rec2.Fields(2) & "'"
rec3.open x, con, adOpenKeyset, adLockOptimistic
Combo1.AddItem rec2.Fields(0) & " - " & rec2.Fields(1) & " - " & rec3.Fields(1)
Else
Combo1.AddItem rec2.Fields(0) & " - " & rec2.Fields(1)
End If
End If
rec2.MoveNext
Next
Else
Combo1.Visible = False
End If
End Sub

Private Sub Picture1_KeyPress(KeyAscii As Integer)
If KeyAscii = 115 Then
Me.Width = 12345
Me.Height = 6945
End If
End Sub
