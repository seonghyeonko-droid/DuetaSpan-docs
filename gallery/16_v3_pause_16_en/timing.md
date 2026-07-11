# v3_pause_16_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "Remy",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-27",
#       "category": "home",
#       "text": "User's home address is 346 Birch Road."
#     },
#     {
#       "date": "2026-05-20",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-08-23",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-06-13",
#       "category": "diet",
#       "text": "User is vegetarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-13",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was just wondering… how many… | S2 Eight, okay. And… um… what was the | S3 Actually, yes. Who directed that f | S4 …when it originally aired?

     0.00s  user  발화 시작: I was just wondering… how many…
     0.00s  <ret> 발화 (turn2 첫 프레임)
     0.00s  <ret> 발화 (turn5 첫 프레임)
     0.03s  user  발화 시작: …episodes are in the original season five?
     0.03s  user  발화 끝
     0.07s  agent 발화 시작: <ret> It looks like the original season five has a total of 
     0.07s  ⚡SPAN 주입 [d'=0.12s / d_lead=0.12s]: The fifth season of the original series contains eight episodes in tot
     0.07s  user  발화 끝
     0.19s  user  발화 시작: Uh-huh.
     0.19s  agent 발화 끝
     0.19s  user  발화 시작: Eight, okay. And… um… what was the first episode called?
     0.19s  user  발화 끝
     0.25s  agent 발화 시작: <ret> The first episode of season five is titled “The Longes
     0.25s  ⚡SPAN 주입 [d'=0.12s / d_lead=0.12s]: The first episode of the fifth season is titled "The Longest Day".
     0.25s  user  발화 끝
     0.32s  <ret> 발화 (turn9 첫 프레임)
     0.36s  user  발화 시작: Hmm.
     0.36s  agent 발화 끝
     0.37s  agent 발화 시작: Is there anything else I can help you with regarding the sho
     0.37s  user  발화 끝
     0.44s  user  발화 시작: Actually, yes. Who directed that first episode?
     0.44s  agent 발화 끝
     0.48s  agent 발화 시작: <ret> Stephen Hopkins directed “The Longest Day,” and Robert
     0.48s  ⚡SPAN 주입 [d'=0.12s / d_lead=0.12s]: "The Longest Day" was directed by Stephen Hopkins, and written by Robe
     0.48s  user  발화 끝
     0.59s  user  발화 시작: Uh-huh.
     0.59s  agent 발화 끝
     0.60s  agent 발화 시작: It truly is a collaborative art form, wouldn't you agree?
     0.60s  user  발화 끝
     0.63s  <ret> 발화 (turn15 첫 프레임)
     0.65s  user  발화 시작: Okay.
     0.65s  agent 발화 끝
     0.66s  user  발화 시작: That’s true. Could you tell me…
     0.66s  user  발화 끝
     0.69s  user  발화 시작: …when it originally aired?
     0.69s  user  발화 끝
     0.71s  agent 발화 시작: <ret> "The Longest Day" originally aired on November twenty-
     0.71s  ⚡SPAN 주입 [d'=0.14s / d_lead=0.14s]: "The Longest Day" originally aired on November 21, 2001, on CBS.
     0.71s  user  발화 끝
     0.86s  user  발화 시작: Oh.
     0.86s  agent 발화 끝
     0.86s  user  발화 시작: Wow, that was a long time ago…
     0.86s  user  발화 끝
     0.90s  agent 발화 시작: It certainly was. Sometimes revisiting those older stories c
     0.90s  user  발화 끝
     1.00s  agent 발화 끝
