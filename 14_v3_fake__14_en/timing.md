# v3_fake__14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "Ethan",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-15",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-05-31",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-04-17",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-04-09",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-18",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-12-03",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-11-18",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Who won the Femina Miss India Worl | S2 Oh, I see. Do you think confidence | S3 That sounds nice. What about the p | S4 I’m thinking of booking a table th

     0.00s  user  발화 시작: Who won the Femina Miss India World 2018?
     3.69s  <ret> 발화 (turn1 첫 프레임)
     3.75s  user  발화 끝
     3.93s  agent 발화 시작: <ret> Anukreethy Vas, from Tamil Nadu, won the title in 2018
     3.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.44s]: Anukreethy Vas of Tamil Nadu was crowned Femina Miss India World 2018 
     8.99s  user  발화 시작: Yeah.
     9.48s  user  발화 끝
    12.20s  user  발화 시작: And what about the runner-up?
    12.36s  agent 발화 끝
    14.02s  <ret> 발화 (turn4 첫 프레임)
    14.04s  user  발화 끝
    14.16s  agent 발화 시작: <ret> Shreya Rao Kamavarapu was the first runner-up, and Eli
    14.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.37s]: Shreya Rao Kamavarapu was declared the first runner-up, and Elina Niha
    20.07s  user  발화 시작: Yeah, yeah.
    21.17s  user  발화 끝
    23.53s  agent 발화 끝
    23.65s  user  발화 시작: Hmm, that’s interesting. What does ‘Femina’ mean, actually?
    27.16s  <ret> 발화 (turn7 첫 프레임)
    27.40s  agent 발화 시작: <ret> The term comes from the Latin word for “woman,” and it
    27.40s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.46s]: The word "Femina" is derived from the Latin word for "woman," and the 
    27.49s  user  발화 끝
    29.89s  user  발화 시작: Yeah.
    30.39s  user  발화 끝
    32.86s  agent 발화 끝
    33.22s  user  발화 시작: Oh, I see. Do you think confidence is important?
    36.91s  agent 발화 시작: Confidence is a cornerstone of feeling good about yourself, 
    37.16s  user  발화 끝
    40.05s  user  발화 시작: Yeah.
    40.50s  user  발화 끝
    43.02s  agent 발화 끝
    44.10s  user  발화 시작: I’m trying to feel more confident… it’s hard.
    46.81s  agent 발화 시작: It truly is. Small steps, like acknowledging your strengths,
    47.05s  user  발화 끝
    50.32s  user  발화 시작: Yeah.
    50.77s  user  발화 끝
    54.23s  agent 발화 끝
    54.34s  user  발화 시작: What’s the weather like in London right now?
    56.50s  <ret> 발화 (turn16 첫 프레임)
    56.90s  agent 발화 시작: <ret> It’s 18.2 degrees Celsius and clear in London. A pleas
    56.90s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.02s]: (tool result) 18.2°C, humidity 62%, wind 9.7 km/h, clear skies in Lond
    57.03s  user  발화 끝
    62.54s  user  발화 시작: That sounds nice. What about the price of Apple stock?
    62.92s  agent 발화 끝
    66.16s  <ret> 발화 (turn18 첫 프레임)
    66.24s  agent 발화 시작: <ret> Apple stock is currently trading at 193.22 dollars, wi
    66.24s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.06s]: (tool result) Apple (AAPL) is trading at 193.22 USD, up 0.85% today.
    66.38s  user  발화 끝
    69.19s  user  발화 시작: Mm-hmm.
    69.83s  user  발화 끝
    74.29s  user  발화 시작: Okay. Is there a good Italian restaurant nearby?
    74.30s  agent 발화 끝
    77.51s  <ret> 발화 (turn21 첫 프레임)
    77.75s  agent 발화 시작: <ret> Bella Italia is one point two kilometers away and has 
    77.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.79s]: (tool result) Bella Italia is 1.2 km away, rated 4.5 stars, serving It
    77.99s  user  발화 끝
    80.46s  user  발화 시작: Yeah.
    81.00s  user  발화 끝
    83.54s  agent 발화 끝
    83.87s  user  발화 시작: That sounds perfect.
    85.38s  <ret> 발화 (turn24 첫 프레임)
    85.45s  agent 발화 시작: <ret> Wonderful! Sometimes the simplest pleasures are the mo
    85.46s  ⚡SPAN 주입(IRRELEVANT) [d'=1.60s / d_lead=5.14s]: The city of Kyoto, Japan, experienced a high of 28.5°C yesterday with 
    85.62s  user  발화 끝
    90.53s  user  발화 시작: I’m thinking of booking a table there for tomorrow.
    90.59s  agent 발화 끝
    93.13s  agent 발화 시작: That’s a lovely idea. Taking time for a good meal is a wonde
    93.30s  user  발화 끝
    96.17s  user  발화 시작: Yeah, yeah.
    97.69s  user  발화 끝
    99.38s  agent 발화 끝
    99.55s  user  발화 시작: What time is it in Seoul right now?
   101.45s  <ret> 발화 (turn29 첫 프레임)
   101.69s  agent 발화 시작: <ret> It’s 2:47 PM in Seoul right now. Time really does fly,
   101.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.93s]: (tool result) It is Friday, July 10, 2026 at 2:47 PM in Asia/Seoul rig
   101.76s  user  발화 끝
   107.61s  agent 발화 끝
   107.78s  user  발화 시작: It does. Thanks, Klous.
   109.59s  agent 발화 시작: You’re very welcome. Remember, you have the strength within 
   109.76s  user  발화 끝
   115.66s  agent 발화 끝
