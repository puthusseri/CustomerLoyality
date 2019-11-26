VERSION 5.00
Begin VB.Form Form7 
   BackColor       =   &H00000000&
   ClientHeight    =   7035
   ClientLeft      =   330
   ClientTop       =   330
   ClientWidth     =   4005
   ControlBox      =   0   'False
   ForeColor       =   &H00FFFFFF&
   LinkTopic       =   "Form7"
   Picture         =   "Form7CARdetails.frx":0000
   ScaleHeight     =   7035
   ScaleWidth      =   4005
   Begin VB.PictureBox Picture1 
      Height          =   6135
      Left            =   360
      Picture         =   "Form7CARdetails.frx":FE8B4
      ScaleHeight     =   6075
      ScaleWidth      =   2955
      TabIndex        =   0
      Top             =   360
      Width           =   3015
      Begin VB.PictureBox Picture5 
         Appearance      =   0  'Flat
         BackColor       =   &H00000000&
         BorderStyle     =   0  'None
         ForeColor       =   &H80000008&
         Height          =   6975
         Left            =   0
         ScaleHeight     =   6975
         ScaleWidth      =   3015
         TabIndex        =   1
         Top             =   0
         Width           =   3015
         Begin VB.OptionButton clr1 
            BackColor       =   &H00000000&
            BeginProperty Font 
               Name            =   "Century Schoolbook"
               Size            =   9
               Charset         =   0
               Weight          =   400
               Underline       =   0   'False
               Italic          =   -1  'True
               Strikethrough   =   0   'False
            EndProperty
            ForeColor       =   &H00FFFFFF&
            Height          =   250
            Index           =   10
            Left            =   600
            TabIndex        =   12
            Top             =   5040
            Width           =   2075
         End
         Begin VB.OptionButton clr1 
            BackColor       =   &H00000000&
            BeginProperty Font 
               Name            =   "Century Schoolbook"
               Size            =   9
               Charset         =   0
               Weight          =   400
               Underline       =   0   'False
               Italic          =   -1  'True
               Strikethrough   =   0   'False
            EndProperty
            ForeColor       =   &H00FFFFFF&
            Height          =   250
            Index           =   9
            Left            =   600
            TabIndex        =   11
            Top             =   4560
            Width           =   2075
         End
         Begin VB.OptionButton clr1 
            BackColor       =   &H00000000&
            BeginProperty Font 
               Name            =   "Century Schoolbook"
               Size            =   9
               Charset         =   0
               Weight          =   400
               Underline       =   0   'False
               Italic          =   -1  'True
               Strikethrough   =   0   'False
            EndProperty
            ForeColor       =   &H00FFFFFF&
            Height          =   250
            Index           =   8
            Left            =   600
            TabIndex        =   10
            Top             =   4080
            Width           =   2075
         End
         Begin VB.OptionButton clr1 
            BackColor       =   &H00000000&
            BeginProperty Font 
               Name            =   "Century Schoolbook"
               Size            =   9
               Charset         =   0
               Weight          =   400
               Underline       =   0   'False
               Italic          =   -1  'True
               Strikethrough   =   0   'False
            EndProperty
            ForeColor       =   &H00FFFFFF&
            Height          =   250
            Index           =   7
            Left            =   600
            TabIndex        =   9
            Top             =   3600
            Width           =   2075
         End
         Begin VB.OptionButton clr1 
            BackColor       =   &H00000000&
            BeginProperty Font 
               Name            =   "Century Schoolbook"
               Size            =   9
               Charset         =   0
               Weight          =   400
               Underline       =   0   'False
               Italic          =   -1  'True
               Strikethrough   =   0   'False
            EndProperty
            ForeColor       =   &H00FFFFFF&
            Height          =   250
            Index           =   6
            Left            =   600
            TabIndex        =   8
            Top             =   3120
            Width           =   2075
         End
         Begin VB.OptionButton clr1 
            BackColor       =   &H00000000&
            BeginProperty Font 
               Name            =   "Century Schoolbook"
               Size            =   9
               Charset         =   0
               Weight          =   400
               Underline       =   0   'False
               Italic          =   -1  'True
               Strikethrough   =   0   'False
            EndProperty
            ForeColor       =   &H00FFFFFF&
            Height          =   250
            Index           =   5
            Left            =   600
            TabIndex        =   7
            Top             =   2640
            Width           =   2075
         End
         Begin VB.OptionButton clr1 
            BackColor       =   &H00000000&
            BeginProperty Font 
               Name            =   "Century Schoolbook"
               Size            =   9
               Charset         =   0
               Weight          =   400
               Underline       =   0   'False
               Italic          =   -1  'True
               Strikethrough   =   0   'False
            EndProperty
            ForeColor       =   &H00FFFFFF&
            Height          =   250
            Index           =   4
            Left            =   600
            TabIndex        =   6
            Top             =   2160
            Width           =   2075
         End
         Begin VB.OptionButton clr1 
            BackColor       =   &H00000000&
            BeginProperty Font 
               Name            =   "Century Schoolbook"
               Size            =   9
               Charset         =   0
               Weight          =   400
               Underline       =   0   'False
               Italic          =   -1  'True
               Strikethrough   =   0   'False
            EndProperty
            ForeColor       =   &H00FFFFFF&
            Height          =   250
            Index           =   3
            Left            =   600
            TabIndex        =   5
            Top             =   1680
            Width           =   2075
         End
         Begin VB.OptionButton clr1 
            BackColor       =   &H00000000&
            BeginProperty Font 
               Name            =   "Century Schoolbook"
               Size            =   9
               Charset         =   0
               Weight          =   400
               Underline       =   0   'False
               Italic          =   -1  'True
               Strikethrough   =   0   'False
            EndProperty
            ForeColor       =   &H00FFFFFF&
            Height          =   250
            Index           =   2
            Left            =   600
            TabIndex        =   4
            Top             =   1200
            Width           =   2075
         End
         Begin VB.OptionButton clr1 
            BackColor       =   &H00000000&
            BeginProperty Font 
               Name            =   "Century Schoolbook"
               Size            =   9
               Charset         =   0
               Weight          =   400
               Underline       =   0   'False
               Italic          =   -1  'True
               Strikethrough   =   0   'False
            EndProperty
            ForeColor       =   &H00FFFFFF&
            Height          =   250
            Index           =   1
            Left            =   600
            TabIndex        =   3
            Top             =   720
            Width           =   2075
         End
         Begin VB.OptionButton clr1 
            BackColor       =   &H00000000&
            BeginProperty Font 
               Name            =   "Century Schoolbook"
               Size            =   9
               Charset         =   0
               Weight          =   400
               Underline       =   0   'False
               Italic          =   -1  'True
               Strikethrough   =   0   'False
            EndProperty
            ForeColor       =   &H00FFFFFF&
            Height          =   250
            Index           =   0
            Left            =   600
            TabIndex        =   2
            Top             =   240
            Width           =   2075
         End
      End
   End
End
Attribute VB_Name = "Form7"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Private Sub clr1_Click(Index As Integer)
clr1no = clr1(Index).Index
End Sub

Private Sub Form_Activate()
If rec.State = 1 Then
rec.Close
End If
rec.open "select colour_name from colour where model_id in (select model_id from model where model_name ='" & Form5.ordcmb2.Text & "')"
For t = 0 To rec.RecordCount - 1
clr1(t).Caption = rec.Fields(0)
rec.MoveNext
Next
End Sub

Private Sub Form_Click()
Form5.Command2.Visible = True
End Sub

Private Sub Form_DblClick()
Me.Hide
End Sub



