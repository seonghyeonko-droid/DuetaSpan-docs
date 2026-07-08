# v3_noinfo_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I'd like to arrange a visit to Sunset Ridge Estates on May f
     3.73s  <ret> 발화 (turn1 첫 프레임)
     3.89s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.43s]: (tool result) Sunset Ridge Estates is available May first at 10:00 AM 
     4.32s  agent 발화 시작: <ret> Certainly. Sunset Ridge Estates has openings on May fi
     4.45s  user  발화 끝
    10.81s  agent 발화 끝
    10.92s  user  발화 시작: Two PM sounds good. Can you book that for me?
    13.18s  <ret> 발화 (turn3 첫 프레임)
    13.50s  ⚡SPAN 주입 [d'=0.32s / d_lead=0.46s]: (tool result) Booking confirmed. Sunset Ridge Estates, May first, 2:00
    13.78s  agent 발화 시작: <ret> Absolutely. Your visit to Sunset Ridge Estates is conf
    13.87s  user  발화 끝
    22.88s  user  발화 시작: Great. Uh, do you know anything about the architect who desi
    23.01s  agent 발화 끝
    28.12s  user  발화 끝
    28.18s  agent 발화 시작: That’s a good question. The estates were designed by Arthur 
    35.09s  agent 발화 끝
    35.83s  user  발화 시작: Interesting. I— I mean, was he known for anything else?
    38.72s  <ret> 발화 (turn7 첫 프레임)
    39.31s  agent 발화 시작: <ret> He was, indeed. Arthur Blackwood also designed the Old
    39.43s  user  발화 끝
    39.72s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.35s]: (tool result) Arthur Blackwood designed the Old Mill Library and St. J
    45.90s  user  발화 시작: St. Jude’s… I think my grandmother mentioned that church. Wh
    46.07s  agent 발화 끝
    50.59s  <ret> 발화 (turn9 첫 프레임)
    50.84s  ⚡SPAN 주입 [d'=0.24s / d_lead=1.35s]: (tool result) St. Jude’s Church is built in the Gothic Revival style, 
    51.20s  agent 발화 시작: <ret> It’s quite striking. St. Jude’s Church is Gothic Reviv
    51.41s  user  발화 끝
    57.02s  user  발화 시작: Gothic Revival, right. [sigh] I always forget the terms. Is 
    57.03s  agent 발화 끝
    63.51s  <ret> 발화 (turn11 첫 프레임)
    63.51s  ⚡SPAN 주입 [d'=0.00s / d_lead=1.30s]: (tool result) The Golden Spoon is 1.2 kilometers from Sunset Ridge Est
    64.11s  agent 발화 시작: <ret> There are several options. The Golden Spoon is one poi
    64.20s  user  발화 끝
    71.44s  user  발화 시작: Sounds promising. What kind of food do they serve?
    71.57s  agent 발화 끝
    73.92s  <ret> 발화 (turn13 첫 프레임)
    74.52s  agent 발화 시작: <ret> They have a varied menu. The Golden Spoon offers Itali
    74.68s  user  발화 끝
    74.88s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.32s]: (tool result) The Golden Spoon serves Italian and American cuisine.
    80.53s  agent 발화 끝
    80.59s  user  발화 시작: Perfect. And what's the weather forecast for May first?
    83.57s  <ret> 발화 (turn15 첫 프레임)
    84.15s  user  발화 끝
    84.17s  agent 발화 시작: <ret> Let me check that for you. May first will be eighteen 
    84.53s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.35s]: (tool result) May first will be 18 degrees Celsius, partly cloudy.
    90.38s  user  발화 시작: That’s good to know. I’m a stonemason, by the way— restores 
    90.42s  agent 발화 끝
    95.15s  user  발화 끝
    95.36s  agent 발화 시작: Ah, a fellow craftsman. It’s a demanding profession, requiri
   103.94s  agent 발화 끝
   104.57s  user  발화 시작: It is, yes. I've been working on a cathedral restoration lat
   109.04s  agent 발화 시작: Cathedrals… magnificent structures. The weight of history in
   109.06s  user  발화 끝
   119.06s  agent 발화 끝
