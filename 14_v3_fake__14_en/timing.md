# v3_fake__14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "Thomas",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-30",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-04-11",
#       "category": "home",
#       "text": "User's home address is 233 Oak Avenue."
#     },
#     {
#       "date": "2026-02-01",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in August."
#     },
#     {
#       "date": "2025-09-15",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-08-18",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-07-06",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-10",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-01-24",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Who has won the most national awar | S2 Who won in, say, 2000? | S3 Suriya won twice in a row? That’s  | S4 It really is. They've given us so 

     0.00s  user  발화 시작: Who has won the most national awards for best actor?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.00s  <ret> 발화 (turn4 첫 프레임)
     0.03s  agent 발화 시작: <ret> It seems you're pondering accolades— Amitabh Bachchan 
     0.03s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: Amitabh Bachchan has won the most national awards for best actor, with
     0.03s  user  발화 끝
     0.05s  <ret> 발화 (turn6 첫 프레임)
     0.09s  <ret> 발화 (turn11 첫 프레임)
     0.10s  user  발화 시작: Yeah.
     0.10s  agent 발화 끝
     0.11s  user  발화 시작: Four awards, wow. What was his first one for?
     0.11s  user  발화 끝
     0.13s  agent 발화 시작: <ret> His first win came in 1969 for the film “Saat Hindusta
     0.13s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: Amitabh Bachchan first won the National Film Award for Best Actor in 1
     0.13s  user  발화 끝
     0.18s  user  발화 시작: And what about Dilip Kumar? Was he up there?
     0.18s  agent 발화 끝
     0.21s  agent 발화 시작: <ret> Dilip Kumar received the award three times—for “Shakti
     0.21s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: Dilip Kumar won the National Film Award for Best Actor three times, fo
     0.21s  user  발화 끝
     0.26s  user  발화 시작: Those are some classic films.
     0.26s  agent 발화 끝
     0.27s  agent 발화 시작: They truly are. It's lovely to reflect on such enduring perf
     0.27s  user  발화 끝
     0.30s  <ret> 발화 (turn19 첫 프레임)
     0.31s  user  발화 시작: Okay.
     0.31s  agent 발화 끝
     0.32s  user  발화 시작: Who won in, say, 2000?
     0.32s  user  발화 끝
     0.33s  agent 발화 시작: <ret> In the year 2000, the award went to Manisha Koirala fo
     0.33s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: The National Film Award for Best Actor in 2000 was awarded to Manisha 
     0.33s  user  발화 끝
     0.37s  user  발화 시작: That's a surprise. I thought it was always men.
     0.37s  agent 발화 끝
     0.40s  agent 발화 시작: It's a good reminder that talent knows no gender, and the aw
     0.40s  user  발화 끝
     0.40s  <ret> 발화 (turn15 첫 프레임)
     0.45s  user  발화 시작: What about more recently? Like in the last five years?
     0.45s  agent 발화 끝
     0.48s  agent 발화 시작: <ret> Over the last five years, the winners were Ayushmann K
     0.48s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: The winners of the National Film Award for Best Actor in the last five
     0.48s  user  발화 끝
     0.56s  user  발화 시작: Nice.
     0.56s  agent 발화 끝
     0.56s  user  발화 시작: Suriya won twice in a row? That’s impressive—
     0.56s  user  발화 끝
     0.58s  user  발화 시작: …Is there anyone who's ever won *three* times in a row?
     0.58s  user  발화 끝
     0.58s  <ret> 발화 (turn21 첫 프레임)
     0.62s  agent 발화 시작: <ret> No actor has ever achieved three consecutive wins for 
     0.62s  ⚡SPAN 주입 [d'=0.03s / d_lead=0.03s]: No actor has ever won the National Film Award for Best Actor three tim
     0.62s  user  발화 끝
     0.65s  user  발화 시작: Oh, okay. That's good to know.
     0.65s  agent 발화 끝
     0.66s  agent 발화 시작: <ret> It speaks to the incredible level of competition, does
     0.66s  ⚡SPAN 주입(IRRELEVANT) [d'=0.05s / d_lead=0.05s]: The current temperature in London is 18.5°C, with a humidity of 68% an
     0.66s  user  발화 끝
     0.71s  agent 발화 시작: It’s interesting to consider the longevity of these actors’ 
     0.71s  agent 발화 끝
     0.75s  user  발화 시작: Yeah.
     0.75s  agent 발화 끝
     0.76s  user  발화 시작: It really is. They've given us so many memories.
     0.76s  user  발화 끝
     0.78s  agent 발화 시작: Yes, and the power of film to create those lasting memories 
     0.78s  user  발화 끝
     0.83s  user  발화 시작: Do you think awards really matter, though?
     0.83s  agent 발화 끝
     0.85s  agent 발화 시작: That's a profound question. They can be a form of recognitio
     0.85s  user  발화 끝
     0.91s  user  발화 시작: Yeah, yeah.
     0.91s  agent 발화 끝
     0.92s  user  발화 시작: You're right. It's about the connection, isn't it?
     0.92s  user  발화 끝
     0.94s  agent 발화 시작: Precisely. It’s about the resonance a performance has within
     0.94s  user  발화 끝
     1.00s  agent 발화 끝
