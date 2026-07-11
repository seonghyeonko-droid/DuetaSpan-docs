# v3_selfc_08_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "Simon",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-08",
#       "category": "home",
#       "text": "User's home address is 860 Pine Court."
#     },
#     {
#       "date": "2025-12-03",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-10-26",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in August."
#     },
#     {
#       "date": "2025-09-28",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-13",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I need to find a quiet café with g | S2 Great. I'm meeting a friend there  | S3 Yeah, that would be good. I haven' | S4 So, how do I break that cycle?

     0.00s  user  발화 시작: I need to find a quiet café with good Wi-Fi near the Nationa
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.00s  <ret> 발화 (turn3 첫 프레임)
     0.00s  <ret> 발화 (turn6 첫 프레임)
     0.04s  agent 발화 시작: <ret> I can help with that. There are several cafés near the
     0.04s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: The National Museum of Korea is located at 161, Seonrin-dong, Jongno-g
     0.04s  user  발화 끝
     0.08s  user  발화 시작: …actually, does that museum have a café itself?
     0.08s  agent 발화 끝
     0.11s  agent 발화 시작: <ret> Yes, the National Museum of Korea does have a café. It
     0.11s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) The National Museum of Korea operates a café called "Mus
     0.11s  user  발화 끝
     0.17s  user  발화 시작: Mm-hmm.
     0.17s  agent 발화 끝
     0.17s  user  발화 시작: Oh, perfect! What are their hours today?
     0.17s  user  발화 끝
     0.19s  agent 발화 시작: <ret> Museum Madang is open today from ten in the morning un
     0.19s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: (tool result) Museum Madang is open today, July 10, 2026, from 10:00 A
     0.19s  user  발화 끝
     0.23s  user  발화 시작: Great. I'm meeting a friend there next Tuesday.
     0.23s  agent 발화 끝
     0.26s  agent 발화 시작: That sounds lovely. A meeting at a museum café is a very pea
     0.26s  user  발화 끝
     0.30s  user  발화 시작: I’m feeling a bit stressed about a presentation I have to gi
     0.30s  agent 발화 끝
     0.34s  agent 발화 시작: It's perfectly natural to feel stressed before a presentatio
     0.34s  user  발화 끝
     0.38s  user  발화 시작: I’m worried I’ll forget what I want to say.
     0.38s  agent 발화 끝
     0.41s  agent 발화 시작: That's a common worry. Perhaps we could explore some strateg
     0.41s  user  발화 끝
     0.46s  user  발화 시작: Mm-hmm.
     0.46s  agent 발화 끝
     0.46s  user  발화 시작: Yeah, that would be good. I haven't even started writing it 
     0.46s  user  발화 끝
     0.49s  agent 발화 시작: It’s alright to feel overwhelmed. Starting is often the hard
     0.49s  user  발화 끝
     0.54s  user  발화 시작: Yeah.
     0.54s  agent 발화 끝
     0.54s  agent 발화 시작: Sometimes, simply outlining your main points can ease that f
     0.54s  user  발화 끝
     0.60s  user  발화 시작: I keep putting it off, though. I always find something else 
     0.60s  agent 발화 끝
     0.63s  agent 발화 시작: Procrastination is a very human tendency. It often stems fro
     0.63s  user  발화 끝
     0.68s  user  발화 시작: Mhm.
     0.68s  agent 발화 끝
     0.68s  user  발화 시작: I think you're right. I’m a perfectionist, I guess.
     0.68s  user  발화 끝
     0.71s  agent 발화 시작: That's insightful of you. Perfectionism can be a double-edge
     0.71s  user  발화 끝
     0.76s  user  발화 시작: Okay.
     0.76s  agent 발화 끝
     0.76s  user  발화 시작: So, how do I break that cycle?
     0.76s  user  발화 끝
     0.78s  agent 발화 시작: Perhaps try reframing your goal. Instead of aiming for perfe
     0.78s  user  발화 끝
     0.83s  user  발화 시작: Mm-hmm.
     0.83s  agent 발화 끝
     0.83s  user  발화 시작: That makes sense. It’s about communication, not flawless exe
     0.83s  user  발화 끝
     0.86s  agent 발화 시작: Exactly. And remember, your audience wants you to succeed. T
     0.86s  user  발화 끝
     0.91s  user  발화 시작: I should probably write down a few bullet points then.
     0.91s  agent 발화 끝
     0.94s  agent 발화 시작: That’s a wonderful first step. Just a few key ideas will giv
     0.94s  user  발화 끝
     1.00s  agent 발화 끝
