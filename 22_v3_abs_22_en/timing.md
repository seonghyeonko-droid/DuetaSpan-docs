# v3_abs_22_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 What mode of government does the a | S2 Right. And if someone starts forge | S3 That’s… reassuring. But what about | S4 That’s…young. But is it genetic, u

     0.00s  user  발화 시작: What mode of government does the anarchists hate?
     2.57s  <ret> 발화 (turn1 첫 프레임)
     2.72s  agent 발화 시작: <ret> That’s a fascinating question, exploring political ide
     2.92s  user  발화 끝
     4.33s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.29s]: (no information found)
    13.96s  user  발화 시작: Oh. Well, what about Alzheimer’s? What does that actually *d
    13.99s  agent 발화 끝
    19.26s  agent 발화 시작: It's a truly devastating illness, affecting so many.
    19.28s  user  발화 끝
    22.91s  <ret> 발화 (turn4 첫 프레임)
    22.91s  agent 발화 끝
    22.99s  agent 발화 시작: <ret> Understanding the pathology is crucial for research. A
    24.27s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.21s]: Alzheimer’s disease is characterized by the buildup of amyloid plaques
    30.40s  user  발화 시작: Plaques and tangles… uh, are those like, physical things you
    30.77s  agent 발화 끝
    34.82s  agent 발화 시작: [laugh] Yes, absolutely. They are visible under a microscope
    34.93s  user  발화 끝
    39.02s  <ret> 발화 (turn7 첫 프레임)
    39.40s  agent 발화 시작: <ret> Visualizing these changes helps with diagnosis. A micr
    39.46s  agent 발화 끝
    40.13s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.73s]: Microscopic examination of brain tissue reveals the presence of amyloi
    47.14s  agent 발화 끝
    47.46s  user  발화 시작: Right. And if someone starts forgetting things, is that *alw
    51.78s  agent 발화 시작: Not at all. Memory loss has many possible causes.
    52.00s  user  발화 끝
    55.64s  <ret> 발화 (turn10 첫 프레임)
    55.95s  agent 발화 시작: <ret> Distinguishing between causes is key to care. Memory l
    55.99s  agent 발화 끝
    57.48s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.33s]: Memory loss can be caused by a variety of factors, including stress, d
    59.93s  user  발화 시작: Mm-hmm.
    60.43s  user  발화 끝
    64.38s  user  발화 시작: So, it could be something treatable?
    64.52s  agent 발화 끝
    66.70s  agent 발화 시작: Often, yes. Many causes of memory loss are reversible.
    66.77s  user  발화 끝
    71.04s  user  발화 시작: That’s… reassuring. But what about those tangles? Can anythi
    71.19s  agent 발화 끝
    76.36s  user  발화 끝
    76.47s  agent 발화 시작: That’s a very important question, currently under intensive 
    80.04s  <ret> 발화 (turn16 첫 프레임)
    80.13s  agent 발화 끝
    80.19s  agent 발화 시작: <ret> Research focuses on preventing tangle formation. Thera
    81.88s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.11s]: Current research is exploring potential therapies to prevent the forma
    87.98s  agent 발화 끝
    88.18s  user  발화 시작: Okay. What’s the earliest age someone can get Alzheimer’s?
    92.11s  <ret> 발화 (turn18 첫 프레임)
    92.18s  agent 발화 시작: <ret> Early-onset cases are relatively uncommon. Alzheimer’s
    92.20s  user  발화 끝
    93.55s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.42s]: Early-onset Alzheimer’s disease typically affects individuals younger 
    99.31s  user  발화 시작: That’s…young. But is it genetic, usually?
    99.46s  agent 발화 끝
   103.32s  agent 발화 시작: Genetics can certainly play a role, but it’s complex.
   103.48s  user  발화 끝
   106.90s  <ret> 발화 (turn21 첫 프레임)
   107.06s  agent 발화 시작: <ret> Family history is a risk factor, however. Most cases a
   107.11s  agent 발화 끝
   108.50s  ⚡SPAN 주입 [d'=1.60s / d_lead=2.78s]: While most cases of Alzheimer’s are sporadic, a small percentage are l
   114.20s  agent 발화 끝
   114.66s  user  발화 시작: I— I mean, so it’s not *guaranteed* if my grandmother had it
   118.50s  user  발화 끝
   118.85s  agent 발화 시작: No, not at all. It increases risk, but doesn’t guarantee it.
   123.48s  agent 발화 끝
