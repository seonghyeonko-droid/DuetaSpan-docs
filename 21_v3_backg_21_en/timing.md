# v3_backg_21_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Do you know who played the Taco Bell dog?
     3.75s  agent 발화 시작: That’s a fun bit of pop culture trivia.
     3.75s  user  발화 끝
     7.08s  user  발화 시작: Yeah, I was just wondering… uh, I think my sister asked me.
     7.08s  agent 발화 끝
    12.08s  agent 발화 시작: <ret> Let’s see… Carlos Jaime Alazraqui voiced the Taco Bell
    12.08s  <ret> 발화 (turn3 첫 프레임)
    12.08s  user  발화 끝
    12.16s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.83s]: Carlos Jaime Alazraqui provided the voice for the Taco Bell Chihuahua.
    16.24s  user  발화 시작: Carlos Alazraqui, okay. Is he… is he in other stuff?
    16.24s  agent 발화 끝
    20.41s  agent 발화 시작: He’s quite a versatile performer, actually.
    20.41s  user  발화 끝
    22.91s  user  발화 시작: I— I mean, what else has he done?
    22.91s  agent 발화 끝
    26.24s  agent 발화 시작: <ret> He has a pretty extensive career. Carlos Alazraqui voi
    26.24s  <ret> 발화 (turn7 첫 프레임)
    26.24s  user  발화 끝
    27.24s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.50s]: Carlos Alazraqui has voiced roles in Rocko’s Modern Life and Reno 911!
    33.32s  user  발화 시작: Rocko’s Modern Life! Oh, wow, I loved that show.
    33.32s  agent 발화 끝
    37.07s  agent 발화 시작: It was a very clever cartoon for its time.
    37.07s  user  발화 끝
    40.81s  user  발화 시작: So, he’s a voice actor mostly?
    40.81s  agent 발화 끝
    43.31s  agent 발화 시작: He does a lot of voice work, but he’s also an actor and come
    43.31s  user  발화 끝
    49.14s  user  발화 시작: That’s cool. What kind of flowers do chihuahuas like?
    49.14s  agent 발화 끝
    52.89s  agent 발화 시작: [laugh] That’s a rather whimsical question!
    52.89s  user  발화 끝
    55.39s  user  발화 시작: I just thought… well, it felt relevant, I guess.
    55.39s  agent 발화 끝
    59.14s  agent 발화 시작: It certainly is a creative connection.
    59.14s  user  발화 끝
    61.64s  user  발화 시작: Did you remember to take the trash out?
    61.64s  agent 발화 끝
    64.97s  user  발화 시작: Sorry, what were we talking about again?
    64.97s  user  발화 끝
    67.88s  agent 발화 시작: We were discussing Carlos Alazraqui and the Taco Bell Chihua
    67.88s  user  발화 끝
    72.05s  user  발화 시작: Right! So, those alpine wildflowers I was reading about…
    72.05s  agent 발화 끝
    75.80s  agent 발화 시작: <ret> Alpine plants are fascinating subjects. Alpine wildflo
    75.80s  <ret> 발화 (turn20 첫 프레임)
    75.80s  user  발화 끝
    76.76s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.08s]: Alpine wildflowers often exhibit vibrant colors to attract pollinators
    82.46s  user  발화 시작: Vibrant colors, huh? What kind of colors?
    82.46s  agent 발화 끝
    85.38s  agent 발화 시작: Many shades, often quite striking against the grey rock.
    85.38s  user  발화 끝
    89.12s  user  발화 시작: I see. Do they… do they smell good?
    89.12s  agent 발화 끝
    92.45s  agent 발화 시작: <ret> Scent is less common at altitude. Strong floral scents
    92.45s  <ret> 발화 (turn24 첫 프레임)
    92.45s  user  발화 끝
    93.45s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.50s]: Strong floral scents are less prevalent in alpine environments due to 
   100.37s  user  발화 시작: Oh, so the wind carries the pollen instead?
   100.37s  agent 발화 끝
   103.70s  agent 발화 시작: Precisely. It’s a very efficient system.
   103.70s  user  발화 끝
   106.20s  agent 발화 끝
