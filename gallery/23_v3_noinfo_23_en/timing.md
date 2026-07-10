# v3_noinfo_23_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_noinfo_23",
#     "name": "Nina",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-23",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-06-17",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-06-12",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-05-04",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in October."
#     },
#     {
#       "date": "2026-03-25",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-06-15",
#       "category": "diet",
#       "text": "User is pescatarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-12",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-03-31",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Do you know how to reach Anya Shar | S2 I’m trying to decide if I should l | S3 Great! | S4 Oh, right. Never mind.

     0.00s  user  발화 시작: Do you know how to reach Anya Sharma? I need her contact det
     3.12s  <ret> 발화 (turn1 첫 프레임)
     3.52s  agent 발화 시작: <ret> I’m sorry, I couldn’t find any contact information for
     3.52s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.25s]: (tool result)
     3.79s  user  발화 끝
     9.78s  agent 발화 끝
    10.64s  user  발화 시작: Hmm, okay. Well, what about the origin of the term "burnout"
    14.71s  <ret> 발화 (turn3 첫 프레임)
    15.10s  agent 발화 시작: <ret> The term comes from work done in the 1970s—specificall
    15.11s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.83s]: Burnout was first described in 1974 by Herbert Freudenberger, who used
    15.27s  user  발화 끝
    22.26s  user  발화 시작: Exactly.
    23.08s  user  발화 끝
    26.79s  user  발화 시작: That’s interesting. I’ve been feeling pretty drained lately,
    26.93s  agent 발화 끝
    30.31s  user  발화 끝
    30.42s  agent 발화 시작: That sounds tough. It's really common to feel that way when 
    32.97s  user  발화 시작: Okay.
    33.65s  user  발화 끝
    37.22s  agent 발화 끝
    37.51s  user  발화 시작: Yeah, I think I might be getting there. What’s the weather l
    41.15s  <ret> 발화 (turn9 첫 프레임)
    41.47s  agent 발화 시작: <ret> It’s currently 23.0 degrees Celsius in Seoul, with 74%
    41.47s  ⚡SPAN 주입 [d'=1.44s / d_lead=8.52s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
    41.53s  user  발화 끝
    44.02s  user  발화 시작: Uh-huh.
    44.42s  user  발화 끝
    49.84s  user  발화 시작: Okay, good to know.
    49.99s  agent 발화 끝
    51.12s  user  발화 끝
    51.29s  agent 발화 시작: Knowing the conditions can help you plan your day, even just
    57.36s  agent 발화 끝
    57.77s  user  발화 시작: I’m trying to decide if I should look for a new job.
    60.24s  agent 발화 시작: That’s a big decision, but a very valid one to explore! What
    60.27s  user  발화 끝
    65.70s  agent 발화 끝
    65.88s  user  발화 시작: Well, my current role is just…stifling. No growth opportunit
    70.23s  user  발화 끝
    70.25s  agent 발화 시작: That’s incredibly frustrating. Feeling stuck is a major cont
    75.97s  user  발화 시작: Exactly. Are there any career coaching services available ne
    76.41s  agent 발화 끝
    79.97s  <ret> 발화 (turn18 첫 프레임)
    80.29s  agent 발화 시작: <ret> There are a few options nearby. Brae Wellness is 1.2 k
    80.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.36s]: (tool result) Brae Wellness - 1.2 km, Bright Futures Coaching - 3.5 km
    80.31s  user  발화 끝
    91.57s  user  발화 시작: Hmm, Brae Wellness sounds promising.
    91.65s  agent 발화 끝
    94.48s  user  발화 끝
    94.67s  agent 발화 시작: It does! They specialize in helping people navigate career t
    98.98s  agent 발화 끝
    98.98s  user  발화 시작: Can you book me an appointment with Brae Wellness for next T
   102.30s  <ret> 발화 (turn22 첫 프레임)
   102.53s  agent 발화 시작: <ret> You’re all set! I’ve booked an appointment for you wit
   102.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.18s]: (tool result) Appointment confirmed for Tuesday, July 14, 2026 at 10:0
   102.68s  user  발화 끝
   111.71s  agent 발화 끝
   112.97s  user  발화 시작: Great!
   113.65s  agent 발화 시작: Taking that step is a really positive move. It’s good to be 
   113.70s  user  발화 끝
   118.80s  agent 발화 끝
   118.88s  user  발화 시작: I’m also feeling overwhelmed with tasks at work.
   121.51s  agent 발화 시작: That’s completely understandable. It sounds like you're jugg
   121.56s  user  발화 끝
   125.72s  agent 발화 끝
   125.89s  user  발화 시작: Yeah, it's a lot. What’s the current stock price of Tesla?
   128.93s  <ret> 발화 (turn28 첫 프레임)
   129.08s  agent 발화 시작: <ret> Tesla—TSLA—is currently trading at $255.42, which is d
   129.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.44s]: (tool result) Tesla (TSLA) is trading at $255.42, down $3.15 today.
   129.27s  user  발화 끝
   137.51s  agent 발화 끝
   137.51s  user  발화 시작: Okay, thanks.
   138.32s  agent 발화 시작: You’re welcome. Sometimes just knowing the numbers can feel…
   138.33s  user  발화 끝
   143.81s  user  발화 시작: I need to send a quick message to my sister.
   144.20s  agent 발화 끝
   145.97s  agent 발화 시작: I can help with that, but I’ll need her contact information 
   146.07s  user  발화 끝
   149.58s  agent 발화 끝
   149.58s  user  발화 시작: Oh, right. Never mind.
   151.72s  agent 발화 시작: Just let me know if you change your mind.
   151.84s  user  발화 끝
   153.97s  agent 발화 끝
   155.49s  user  발화 시작: I need to set an alarm for 7:00 AM tomorrow.
   158.30s  <ret> 발화 (turn36 첫 프레임)
   158.45s  user  발화 끝
   158.54s  agent 발화 시작: <ret> Okay, an alarm is set for 7:00 AM tomorrow morning.
   158.54s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.66s]: (tool result) Alarm set for 7:00 AM.
   162.19s  agent 발화 끝
   162.24s  user  발화 시작: Thank you.
   162.70s  agent 발화 시작: You're very welcome. Prioritizing sleep is such a crucial pa
   162.93s  user  발화 끝
   169.18s  agent 발화 끝
   169.29s  user  발화 시작: I think that's all for now.
   170.57s  agent 발화 시작: Alright. Remember, taking small steps towards better well-be
   170.61s  user  발화 끝
   176.78s  agent 발화 끝
