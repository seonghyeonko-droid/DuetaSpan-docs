# v3_hesit_18_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_hesit_18",
#     "name": "Zoe",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-16",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-05-06",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2025-12-06",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-24",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Um, I was wondering… who does Broo | S2 Hmm, I think I remember her marryi | S3 …do they ever stay married for mor | S4 That’s nice. Is RJ on the show now

     0.00s  user  발화 시작: Um, I was wondering… who does Brooke marry on Bold and the B
     8.05s  <ret> 발화 (turn1 첫 프레임)
     8.21s  agent 발화 시작: <ret> It’s a bit complicated, as relationships often are on 
     8.21s  user  발화 끝
     8.35s  ⚡SPAN 주입 [d'=0.30s / d_lead=7.47s]: Brooke Logan has been married to Ridge Forrester on and off throughout
    15.68s  user  발화 시작: Oh, really? How many times, exactly?
    15.68s  agent 발화 끝
    17.39s  <ret> 발화 (turn3 첫 프레임)
    17.92s  agent 발화 시작: <ret> Well, as of November twenty twenty-three, Brooke and R
    17.92s  user  발화 끝
    18.20s  ⚡SPAN 주입 [d'=0.81s / d_lead=9.33s]: Brooke Logan and Ridge Forrester have married a total of seven times a
    27.25s  user  발화 시작: Okay.
    27.25s  agent 발화 끝
    27.62s  user  발화 시작: Wow, seven times! That’s… a lot. Is Ridge her most frequent 
    27.62s  user  발화 끝
    32.33s  <ret> 발화 (turn7 첫 프레임)
    32.47s  agent 발화 시작: Mm-hmm.
    32.47s  user  발화 끝
    32.85s  agent 발화 시작: <ret> Yes, Ridge is definitely her most frequent partner in 
    32.85s  agent 발화 끝
    33.16s  ⚡SPAN 주입 [d'=1.06s / d_lead=7.84s]: While Brooke has been married to other men, including Eric Forrester a
    40.69s  user  발화 시작: Wow.
    40.69s  agent 발화 끝
    41.06s  user  발화 시작: Hmm, I think I remember her marrying someone else… maybe a d
    41.06s  user  발화 끝
    45.49s  <ret> 발화 (turn10 첫 프레임)
    45.54s  agent 발화 시작: <ret> You're right to recall another marriage! She briefly m
    45.54s  user  발화 끝
    46.99s  ⚡SPAN 주입 [d'=1.50s / d_lead=7.09s]: Brooke Logan was also briefly married to Dr. Taylor Hayes’s husband, D
    52.63s  user  발화 시작: Okay, that rings a bell. But is Ridge always the one she end
    52.63s  agent 발화 끝
    58.60s  agent 발화 시작: And a core part of the show’s drama…
    58.60s  user  발화 끝
    61.59s  user  발화 시작: Yeah.
    61.59s  agent 발화 끝
    61.96s  user  발화 시작: …do they ever stay married for more than, like, a year at a 
    61.96s  user  발화 끝
    67.16s  <ret> 발화 (turn15 첫 프레임)
    67.19s  agent 발화 시작: <ret> It seems lasting happiness is elusive for them! Their 
    67.19s  user  발화 끝
    67.65s  ⚡SPAN 주입 [d'=0.49s / d_lead=8.21s]: Brooke and Ridge’s marriages are often short-lived due to ongoing dram
    75.40s  user  발화 시작: Oh, that explains a lot. So, it's a cycle of marrying, divor
    75.40s  agent 발화 끝
    80.62s  agent 발화 시작: Exactly. It’s a pretty classic storyline for them—a constant
    80.62s  user  발화 끝
    85.10s  user  발화 시작: Welll… do they have any children together?
    85.10s  agent 발화 끝
    87.24s  <ret> 발화 (turn19 첫 프레임)
    87.72s  agent 발화 시작: <ret> Yes, they share one son, RJ Forrester, born in two tho
    87.72s  user  발화 끝
    88.59s  ⚡SPAN 주입 [d'=1.35s / d_lead=4.85s]: Brooke Logan and Ridge Forrester have one son together, named RJ Forre
    92.57s  user  발화 시작: Yeah, yeah.
    92.57s  agent 발화 끝
    93.32s  user  발화 시작: That’s nice. Is RJ on the show now?
    93.32s  user  발화 끝
    96.15s  <ret> 발화 (turn22 첫 프레임)
    96.30s  agent 발화 시작: <ret> He recently returned to the show in December twenty tw
    96.30s  user  발화 끝
    96.89s  ⚡SPAN 주입 [d'=0.74s / d_lead=7.84s]: RJ Forrester recently returned to the show in December 2023, after bei
   104.14s  user  발화 시작: Wow, that’s a long time! Thanks for all the info, Gious.
   104.14s  agent 발화 끝
   108.25s  user  발화 끝
