# v3_rag_26_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "David",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "male",
#     "age_range": "60s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-26",
#       "category": "plant",
#       "text": "User is growing a few succulents at home."
#     },
#     {
#       "date": "2026-04-16",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-26",
#       "category": "trip",
#       "text": "User is planning a trip to Morocco in September."
#     },
#     {
#       "date": "2026-03-04",
#       "category": "medication",
#       "text": "User takes a vitamin D supplement."
#     },
#     {
#       "date": "2026-01-27",
#       "category": "schedule",
#       "text": "User has a hybrid 3-days-in-office week."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "car",
#       "text": "User drives a 2015 Toyota Corolla."
#     },
#     {
#       "date": "2026-01-20",
#       "category": "home",
#       "text": "User's home address is 450 Rosewood Drive."
#     },
#     {
#       "date": "2026-01-14",
#       "category": "commute",
#       "text": "User takes the subway to work."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-26",
#       "title": "Booking a moving company",
#       "bullets": [
#         "moving a 2-bedroom apartment across town on the 30th",
#         "needs help disassembling furniture"
#       ]
#     },
#     {
#       "date": "2026-02-16",
#       "title": "Planning a wedding",
#       "bullets": [
#         "guest list around 80 people",
#         "comparing two venues for next May"
#       ]
#     },
#     {
#       "date": "2026-01-31",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building under 900k won/month",
#         "needed parking and a second bedroom near line 2"
#       ]
#     },
#     {
#       "date": "2026-01-15",
#       "title": "Meal-prep planning",
#       "bullets": [
#         "wants high-protein lunches under 600 calories",
#         "avoiding dairy this month"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I'm just feeling a little lost abo | S2 Wow, that’s interesting. I didn't  | S3 She loves Korean BBQ, but also wan | S4 Perfect! That's really helpful, th

     0.00s  user  발화 시작: I'm just feeling a little lost about my direction in life, y
     3.86s  agent 발화 시작: [happy] It's perfectly normal to feel that way sometimes, Ea
     3.88s  user  발화 끝
    12.38s  agent 발화 끝
    13.09s  user  발화 시작: Yeah, but it's hard to even know where to start. I was readi
    17.11s  agent 발화 시작: Yeah.
    17.74s  agent 발화 끝
    19.38s  user  발화 끝
    19.41s  agent 발화 시작: That’s quite a leap! But history can be inspiring. What abou
    26.12s  agent 발화 끝
    26.46s  user  발화 시작: Well, it just made me think about big decisions and making a
    30.61s  agent 발화 시작: Yeah.
    31.06s  agent 발화 끝
    32.54s  <ret> 발화 (turn7 첫 프레임)
    32.83s  agent 발화 시작: <ret> Oh, the document you’re asking about, the first draft 
    32.98s  user  발화 끝
    33.67s  ⚡SPAN 주입 [d'=1.13s / d_lead=9.46s]: Thomas Jefferson composed the first draft of the Declaration of Indepe
    38.38s  user  발화 시작: Yeah.
    38.89s  user  발화 끝
    42.29s  agent 발화 끝
    43.27s  user  발화 시작: Wow, that’s interesting. I didn't know that.
    45.57s  agent 발화 시작: [curious] It's a remarkable piece of history. He was a very 
    45.62s  user  발화 끝
    52.44s  agent 발화 끝
    52.61s  user  발화 시작: It is, I guess. My friend Sarah is visiting Seoul next week,
    59.28s  user  발화 끝
    59.51s  agent 발화 시작: Seoul is a fantastic city! What kind of cuisine does Sarah e
    64.91s  agent 발화 끝
    65.30s  user  발화 시작: She loves Korean BBQ, but also wants to try something a bit 
    69.24s  <ret> 발화 (turn14 첫 프레임)
    69.58s  agent 발화 시작: <ret> For Korean BBQ, Maple Tree House is a popular choice, 
    69.70s  user  발화 끝
    69.88s  ⚡SPAN 주입 [d'=0.64s / d_lead=11.44s]: (tool result) {"restaurants": [{"name": "Maple Tree House", "cuisine":
    74.30s  user  발화 시작: Yeah.
    74.97s  user  발화 끝
    81.02s  agent 발화 끝
    81.07s  agent 발화 시작: [happy] Both have excellent ratings! Perhaps she’d like to s
    88.02s  agent 발화 끝
    88.35s  user  발화 시작: Maybe just those two for now. She’s also trying to figure ou
    91.91s  agent 발화 시작: Yeah.
    92.40s  agent 발화 끝
    93.26s  <ret> 발화 (turn19 첫 프레임)
    93.28s  agent 발화 시작: <ret> The current weather in Seoul is twenty-seven point one
    93.31s  user  발화 끝
    93.86s  ⚡SPAN 주입 [d'=0.60s / d_lead=11.32s]: (tool result) Seoul: 27.1°C, humidity 78%, wind 9.2 km/h.
    96.72s  user  발화 시작: Yeah, totally.
    97.97s  user  발화 끝
   104.60s  agent 발화 끝
   106.02s  user  발화 시작: Perfect! That's really helpful, thank you.
   108.74s  user  발화 끝
   109.00s  agent 발화 시작: [happy] You’re very welcome! Eaen is glad to help you both p
   112.18s  user  발화 시작: Yeah.
   112.58s  user  발화 끝
   113.96s  user  발화 시작: I think I’m starting to feel a little better about things, a
   114.04s  agent 발화 끝
   117.19s  user  발화 끝
   117.31s  agent 발화 시작: [curious] That’s wonderful to hear! Sometimes, just taking s
   125.75s  agent 발화 끝
