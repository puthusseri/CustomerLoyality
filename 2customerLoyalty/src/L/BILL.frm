VERSION 5.00
Begin VB.Form form6 
   BackColor       =   &H00000000&
   BorderStyle     =   1  'Fixed Single
   ClientHeight    =   11490
   ClientLeft      =   15
   ClientTop       =   765
   ClientWidth     =   20460
   ControlBox      =   0   'False
   LinkTopic       =   "Form6"
   MaxButton       =   0   'False
   MinButton       =   0   'False
   Picture         =   "BILL.frx":0000
   ScaleHeight     =   11490
   ScaleWidth      =   20460
   WindowState     =   2  'Maximized
   Begin VB.TextBox Text4 
      Appearance      =   0  'Flat
      BeginProperty Font 
         Name            =   "Garamond"
         Size            =   12
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   285
      Left            =   13680
      TabIndex        =   17
      Top             =   4320
      Width           =   2655
   End
   Begin VB.ComboBox Combo1 
      BeginProperty Font 
         Name            =   "Times New Roman"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   345
      Left            =   3240
      TabIndex        =   16
      Top             =   2280
      Width           =   2775
   End
   Begin VB.TextBox Text7 
      Appearance      =   0  'Flat
      BeginProperty Font 
         Name            =   "Garamond"
         Size            =   12
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   285
      Left            =   13680
      TabIndex        =   7
      Top             =   5040
      Width           =   2655
   End
   Begin VB.TextBox Text6 
      Appearance      =   0  'Flat
      BeginProperty Font 
         Name            =   "Garamond"
         Size            =   12
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   285
      Left            =   13680
      TabIndex        =   6
      Top             =   4680
      Width           =   2655
   End
   Begin VB.TextBox Text5 
      Appearance      =   0  'Flat
      BeginProperty Font 
         Name            =   "Garamond"
         Size            =   12
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   285
      Left            =   13680
      TabIndex        =   5
      Top             =   3960
      Width           =   2655
   End
   Begin VB.TextBox Text3 
      Appearance      =   0  'Flat
      BeginProperty Font 
         Name            =   "Garamond"
         Size            =   12
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   285
      Left            =   5640
      TabIndex        =   4
      Top             =   5400
      Width           =   2655
   End
   Begin VB.TextBox Text2 
      Appearance      =   0  'Flat
      BeginProperty Font 
         Name            =   "Garamond"
         Size            =   12
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   285
      Left            =   5640
      MultiLine       =   -1  'True
      TabIndex        =   1
      Top             =   4320
      Width           =   2655
   End
   Begin VB.CommandButton Command1 
      Caption         =   "PRINT"
      BeginProperty Font 
         Name            =   "Century"
         Size            =   8.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   255
      Left            =   11400
      TabIndex        =   8
      Top             =   9480
      Width           =   1455
   End
   Begin VB.TextBox Text1 
      Appearance      =   0  'Flat
      BeginProperty Font 
         Name            =   "Garamond"
         Size            =   12
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   285
      Left            =   5640
      TabIndex        =   0
      Top             =   3960
      Width           =   2655
   End
   Begin VB.TextBox Text8 
      Appearance      =   0  'Flat
      BeginProperty Font 
         Name            =   "Garamond"
         Size            =   12
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   285
      Left            =   5640
      TabIndex        =   2
      Top             =   4680
      Width           =   2655
   End
   Begin VB.TextBox Text9 
      Appearance      =   0  'Flat
      BeginProperty Font 
         Name            =   "Garamond"
         Size            =   12
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   285
      Left            =   5640
      TabIndex        =   3
      Top             =   5040
      Width           =   2655
   End
   Begin VB.Label Label4 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      Caption         =   "Payment"
      BeginProperty Font 
         Name            =   "Lucida Fax"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   240
      Left            =   12240
      TabIndex        =   18
      Top             =   4320
      Width           =   855
   End
   Begin VB.Label Label8 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      BeginProperty Font 
         Name            =   "Lucida Fax"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   240
      Left            =   14520
      TabIndex        =   15
      Top             =   3480
      Width           =   60
   End
   Begin VB.Image Image1 
      Height          =   960
      Left            =   0
      Picture         =   "BILL.frx":A1C30
      Top             =   0
      Width           =   3855
   End
   Begin VB.Label Label7 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      Caption         =   "EMI-ID"
      BeginProperty Font 
         Name            =   "Lucida Fax"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   240
      Left            =   12240
      TabIndex        =   14
      Top             =   5040
      Width           =   615
   End
   Begin VB.Label Label6 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      Caption         =   "Address"
      BeginProperty Font 
         Name            =   "Lucida Fax"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   240
      Left            =   4200
      TabIndex        =   13
      Top             =   4320
      Width           =   810
   End
   Begin VB.Label Label5 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      Caption         =   "Pone No"
      BeginProperty Font 
         Name            =   "Lucida Fax"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   240
      Left            =   4200
      TabIndex        =   12
      Top             =   5400
      Width           =   810
   End
   Begin VB.Label Label3 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      Caption         =   "Model"
      BeginProperty Font 
         Name            =   "Lucida Fax"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   240
      Left            =   12240
      TabIndex        =   11
      Top             =   3960
      Width           =   585
   End
   Begin VB.Label Label2 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      Caption         =   "Loan ID"
      BeginProperty Font 
         Name            =   "Lucida Fax"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   240
      Left            =   12240
      TabIndex        =   10
      Top             =   4680
      Width           =   735
   End
   Begin VB.Label Label1 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      Caption         =   "Name"
      BeginProperty Font 
         Name            =   "Lucida Fax"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   240
      Left            =   4200
      TabIndex        =   9
      Top             =   3960
      Width           =   555
   End
End
Attribute VB_Name = "form6"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Dim x As String
Dim price
Private Sub Combo1_Click()
If rec2.State = 1 Then
rec2.Close
End If
For t = 1 To Len(Combo1.Text)
x = Mid(Combo1.Text, t, 1)
If x = "-" Then
GoTo l
End If
Next
l:
x = Mid(Combo1.Text, 1, t - 2)
rec2.open "select customer_name,homes_name,city,state,pin,phone_no,stock.stock_id,model_name,colour_name,price from cust,stock,model,colour,booking where booking.booking_id='" & x & "' and colour.colour_id=stock.colour_id and model.model_id=colour.model_id and stock.colour_id= booking.colour_id and booking.customer_id=cust.customer_id", con, adOpenKeyset, adLockOptimistic
price = rec2.Fields(9)
price = Val(price) + (Val(price) * 0.05)
Text1.Text = rec2.Fields(0)
Text2.Text = rec2.Fields(1)
Text8.Text = rec2.Fields(2)
Text9.Text = rec2.Fields(3) & "," & rec2.Fields(4)
Text3.Text = rec2.Fields(5)
Text5.Text = rec2.Fields(7)
End Sub

Private Sub Command1_Click()
If rec.State = 1 Then rec.Close
rec.open "select * from delivery", con, adOpenKeyset, adLockOptimistic
temp = idgenerator
rec.AddNew
rec.Fields(0) = temp
rec.Fields(1) = DateTime.Date
If rec3.State = 1 Then rec3.Close
rec3.open "select * from stock where status = 'ISSUED - " & x & "'", con, adOpenKeyset, adLockOptimistic
rec.Fields(2) = rec3.Fields(0)
rec.Fields(3) = x
rec.Fields(4) = Text4.Text
rec.Fields(5) = Text6.Text
rec.Fields(6) = Text7.Text
rec.Fields(7) = DateTime.Date
rec.Update
If rec.State = 1 Then rec.Close
rec.open "select * from booking where booking_id = '" & x & "'", con, adOpenKeyset, adLockOptimistic
rec.Fields(4) = "DEL"
rec.Update
Set DataReport2.DataSource = rec2
If rec3.State = 1 Then rec3.Close
rec3.open "select * from demanded_fittings where request_id = '" & rec.Fields(0) & "'", con, adOpenKeyset, adLockOptimistic

Dim str1 As String
str1 = rec3.Fields(1)
str1 = " " & Trim(str1) & " "
p = 1
For t = p To Len(str1) - 1
u1 = Mid(str1, t, 1)
If u1 = " " Then
For Y = t + 1 To Len(str1)
X1 = Mid(str1, Y, 1)
If X1 <> " " Then
u2 = u2 & X1
Else
GoTo l
End If
Next
l:

If rec3.State = 1 Then rec3.Close
rec3.open "select * from fittings", con, adOpenKeyset, adLockOptimistic
For k = 0 To Val(u2) - 1
rec3.MoveNext
Next
sum = sum + Val(rec3.Fields(3))
u2 = ""
t = Y - 1
X1 = ""
End If
Next

price1 = price + sum

DataReport2.Sections(2).Controls(4).Caption = FormatDateTime(DateTime.Date, vbLongDate)
DataReport2.Sections(3).Controls(30).Caption = price & "+" & sum
DataReport2.Sections(3).Controls(26).Caption = price1
DataReport2.Show

o = Val(Form4.Label5.Caption)
Form4.Label5.Caption = o - 1

End Sub

Private Sub Form_DblClick()
Unload Me
End Sub

Private Sub Form_Load()
connect
If Form4.Label5.Caption <> "0" Then
If rec2.State = 1 Then
rec2.Close
End If
rec2.open "select * from booking where date_of_delivery ='" & DateTime.Date & "' and status = 'ON'", con, adOpenKeyset, adLockOptimistic

While rec2.EOF <> True

If rec3.State = 1 Then
rec3.Close
End If
rec3.open "select * from cust where customer_id ='" & rec2.Fields(1) & "'", con, adOpenKeyset, adLockOptimistic

If rec.State = 1 Then
rec.Close
End If
rec.open "select model_name from model where model_id in(select model_id from colour where colour_id ='" & rec2.Fields(2) & "')", con, adOpenKeyset, adLockOptimistic

Combo1.AddItem rec2.Fields(0) & " - " & rec3.Fields(1) & " - " & rec.Fields(0)
rec2.MoveNext
Wend
End If


End Sub
