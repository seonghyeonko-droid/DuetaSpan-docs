# v3_pause_16_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "Louis",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-13",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-04-25",
#       "category": "home",
#       "text": "User's home address is 297 Maple Drive."
#     },
#     {
#       "date": "2026-04-19",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-12-28",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-12-20",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-27",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-02-06",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-02-03",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi moshi, I'm feeling really stres | S2 …of the workforce for a while, tho | S3 That's encouraging. I was also won | S4 [sigh] It's just…a lot to think ab

     0.00s  user  발화 시작: Hi moshi, I'm feeling really stressed about my job search.
     4.32s  agent 발화 시작: Hello! It’s completely normal to feel stressed during a job 
     4.32s  user  발화 끝
    12.96s  user  발화 시작: That's good to hear. I’m not even…
    12.96s  agent 발화 끝
    15.99s  user  발화 시작: …sure where to start with my resume.
    15.99s  user  발화 끝
    19.01s  agent 발화 시작: Resumes can feel overwhelming. We can break it down into man
    19.01s  user  발화 끝
    26.36s  user  발화 시작: Uh-huh.
    26.36s  agent 발화 끝
    26.79s  user  발화 시작: Okay, that sounds good. I've been out…
    26.79s  user  발화 끝
    29.82s  user  발화 시작: …of the workforce for a while, though.
    29.82s  user  발화 끝
    32.84s  agent 발화 시작: That’s perfectly alright. We can focus on transferable skill
    32.84s  user  발화 끝
    39.76s  user  발화 시작: Mm-hmm.
    39.76s  agent 발화 끝
    40.19s  user  발화 시작: Like what, exactly? I mostly just raised my kids.
    40.19s  user  발화 끝
    44.08s  agent 발화 시작: [curious] Raising children develops many valuable skills! Pr
    44.08s  user  발화 끝
    48.83s  user  발화 시작: Right.
    48.83s  agent 발화 끝
    49.26s  user  발화 시작: …but will employers actually see those as real skills?
    49.26s  user  발화 끝
    53.15s  user  발화 시작: …do they even care about that stuff, or just formal experien
    53.15s  user  발화 끝
    57.81s  <ret> 발화 (turn15 첫 프레임)
    57.91s  agent 발화 시작: <ret> Employers increasingly prioritize soft skills, with a 
    57.91s  user  발화 끝
    57.91s  ⚡SPAN 주입 [d'=0.59s / d_lead=7.78s]: According to a recent study by the National Association of Colleges an
    65.69s  user  발화 시작: Yeah.
    65.69s  agent 발화 끝
    66.12s  agent 발화 시작: It’s a significant shift. We can reframe your experience to 
    66.12s  user  발화 끝
    72.17s  user  발화 시작: That's encouraging. I was also wondering about interview que
    72.17s  agent 발화 끝
    76.06s  agent 발화 시작: Interview preparation is key. Common questions include “Tell
    76.06s  user  발화 끝
    82.97s  user  발화 시작: Oh, those are the worst! Especially the weakness one.
    82.97s  agent 발화 끝
    86.86s  agent 발화 시작: [laugh] It’s a tricky one. It’s best to frame a weakness as 
    86.86s  user  발화 끝
    95.94s  user  발화 시작: Hmm, okay. What about states with the death penalty? I was r
    95.94s  agent 발화 끝
   101.99s  agent 발화 시작: Yeah.
   101.99s  user  발화 끝
   102.26s  <ret> 발화 (turn24 첫 프레임)
   102.42s  agent 발화 시작: <ret> In 2017, thirty-one states in the United States had th
   102.42s  agent 발화 끝
   102.56s  ⚡SPAN 주입 [d'=0.30s / d_lead=7.35s]: As of December 31, 2017, thirty-one states in the United States had th
   109.77s  user  발화 시작: Thirty-one? That seems like a lot.
   109.77s  agent 발화 끝
   112.36s  agent 발화 시작: It is a significant number. The trend has been towards aboli
   112.36s  user  발화 끝
   118.84s  user  발화 시작: Mhm.
   118.84s  agent 발화 끝
   119.27s  user  발화 시작: [sigh] It's just…a lot to think about, everything. Job searc
   119.27s  user  발화 끝
   124.89s  agent 발화 시작: Yeah.
   124.89s  user  발화 끝
   125.32s  agent 발화 시작: [sigh] I understand. It's okay to feel overwhelmed. Let's fo
   125.32s  agent 발화 끝
   132.67s  user  발화 시작: Okay, you’re right. Maybe we should go back to the resume.
   132.67s  agent 발화 끝
   137.42s  agent 발화 시작: Sounds good. Let’s start with listing your skills – even the
   137.42s  user  발화 끝
   144.77s  user  발화 시작: Yeah.
   144.77s  agent 발화 끝
   145.20s  user  발화 시작: Alright. I think I can do that.
   145.20s  user  발화 끝
   148.23s  agent 발화 시작: Excellent. We’ll build from there. Remember, you have valuab
   148.23s  user  발화 끝
   152.55s  agent 발화 끝
