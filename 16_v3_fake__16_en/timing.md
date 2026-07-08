# v3_fake__16_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: What is a left bundle branch block? I— I think that’s what t
     6.87s  agent 발화 시작: It’s a disruption in the heart’s electrical system, quite co
     6.87s  user  발화 끝
    11.90s  user  발화 시작: Disruptions? What does that mean, exactly?
    11.90s  agent 발화 끝
    14.65s  agent 발화 시작: <ret> Let me explain that. It’s a cardiac conduction abnorma
    14.65s  <ret> 발화 (turn3 첫 프레임)
    14.65s  user  발화 끝
    15.65s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.83s]: A left bundle branch block is a cardiac conduction abnormality.
    25.63s  user  발화 시작: Oh. Is that… dangerous?
    25.63s  agent 발화 끝
    27.46s  agent 발화 시작: Not always, but it’s certainly something to monitor closely 
    27.46s  user  발화 끝
    32.96s  user  발화 시작: So, what causes it? Is it something I did?
    32.96s  agent 발화 끝
    37.08s  agent 발화 시작: <ret> Several factors can contribute. Common causes include 
    37.08s  <ret> 발화 (turn7 첫 프레임)
    37.08s  user  발화 끝
    37.64s  ⚡SPAN 주입 [d'=0.56s / d_lead=1.83s]: Common causes include coronary artery disease, high blood pressure, an
    43.94s  user  발화 시작: [sigh] Those all sound… serious.
    43.94s  agent 발화 끝
    46.23s  agent 발화 시작: They can be, yes, but often manageable with lifestyle change
    46.23s  user  발화 끝
    51.72s  user  발화 시작: Is there a way to fix it? Like, with surgery?
    51.72s  agent 발화 끝
    56.30s  agent 발화 시작: <ret> Treatment depends on the cause. Treatment addresses th
    56.30s  <ret> 발화 (turn11 첫 프레임)
    56.30s  user  발화 끝
    57.30s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.29s]: Treatment for left bundle branch block addresses the underlying heart 
    65.00s  user  발화 시작: Okay, that makes sense. What about symptoms? Did I mention I
    65.00s  agent 발화 끝
    71.41s  agent 발화 시작: <ret> Fatigue is a common symptom, but often it presents wit
    71.41s  <ret> 발화 (turn13 첫 프레임)
    71.41s  user  발화 끝
    72.37s  ⚡SPAN 주입(IRRELEVANT) [d'=0.96s / d_lead=6.87s]: AAPL stock closed at 170.34, up 0.82% today.
    78.27s  agent 발화 시작: It’s remarkable how the body can adapt, isn’t it? Sometimes,
    78.27s  agent 발화 끝
    85.59s  user  발화 시작: Mm-hmm.
    85.59s  agent 발화 끝
    86.05s  agent 발화 시작: It reminds me of soufflés, actually—a slight imbalance and t
    86.05s  user  발화 끝
    96.58s  user  발화 시작: A soufflé? That’s… an odd comparison.
    96.58s  agent 발화 끝
    99.33s  agent 발화 시작: Perhaps, but both require precise timing and a delicate bala
    99.33s  user  발화 끝
   105.28s  user  발화 시작: I guess so. Is it hereditary? Does it run in families?
   105.28s  agent 발화 끝
   110.31s  agent 발화 시작: <ret> There's some evidence of that. A family history of hea
   110.31s  <ret> 발화 (turn20 첫 프레임)
   110.31s  user  발화 끝
   111.31s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.29s]: A family history of heart disease can increase the risk of developing 
   120.38s  agent 발화 끝
