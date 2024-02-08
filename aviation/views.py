from django.shortcuts import redirect, render,HttpResponseRedirect
from django.urls import reverse
from Student.forms import Student_detailForm
from aviation.models import *
import sweetify
from django.views import View
from django.shortcuts import HttpResponse
from django.contrib import messages

# Create your views here.
def home(request):
    if request.method == "POST":
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        message = request.POST.get('message')
        qform = join_with_us.objects.create(email=email , phone = phone , message = message)
        qform.save()
        sweetify.success(request, 'Hey', text= 'You have successfully filled the form', persistent='Done')
    course = Course.objects.all().order_by('id').reverse()[0:4]
    bl = blog.objects.all()
    return render(request, 'Home/index.html',{'course':course, 'bl':bl})

def about(request):
    return render(request, 'Home/about.html')

def course(request):
    course = Course.objects.all().order_by('id').reverse()[0:4]
    return render(request, 'Home/course.html',{'course':course})

def blogs(request):
    bl = blog.objects.all()
    return render(request, 'Home/blog.html',{'bl':bl})

def contact(request):
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        message = request.POST.get('message')
        qform = q_form.objects.create(name = name , email=email , phone = phone , message = message)
        qform.save()
        sweetify.success(request, 'Hey', text= 'You have successfully filled the form', persistent='Done')
        return HttpResponseRedirect(reverse('Home:contact'))
    return render(request, 'Home/contact.html')

class coursedetailview(View):
    def get(self,request,slug):
        course = Course.objects.get(course_slug=slug)
        course_object=Course.objects.get(course_slug=slug)
        course_object.save()
        return render(request, 'Home/coursedetails.html',{'course':course})
    
    
class blogdetailview(View):
    def get(self,request,slug):
        Blog = blog.objects.get(blog_slug=slug)
        Blog_object=blog.objects.get(blog_slug=slug)
        Blog_object.save()
        return render(request, 'Home/blogs.html',{'Blog':Blog})    

def TAC(request):
    return render(request, 'Home/titan.html')

def TAC2(request):
    return render(request, 'Home/TAC.html')

def privacypol(request):
    return render(request, 'Home/privacypolicy.html')

def Addstudent(request):
    form = Student_detailForm()
    context = {
        'form':form
    }
    return render(request, 'Home/Addstudent.html' , context)