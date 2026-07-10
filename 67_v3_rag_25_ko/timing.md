# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "지호",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-04",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2026-02-26",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in May."
#     },
#     {
#       "date": "2026-01-23",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-10-21",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-18",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-08-04",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 파리 오페라 발레단을 천구백팔십삼년부터 천구백팔십구년까지 이끌 | S2 …발레단 단원에게 '에투왈' 칭호를 준 사람 맞나? | S3 에투왈이 뭔데? | S4 러시아에서 태어났으면, 왜 프랑스 발레단을 이끌었지?

     0.00s  user  발화 시작: 파리 오페라 발레단을 천구백팔십삼년부터 천구백팔십구년까지 이끌었던 사람은 누구야?
     5.62s  <ret> 발화 (turn1 첫 프레임)
     5.76s  agent 발화 시작: <ret> 파리 오페라 발레단을 천구백팔십삼년부터 천구백팔십구년까지 이끌었던 사람은 루돌프 하메토비치 누레예
     5.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.66s]: Rudolf Khametovich Nureyev directed the Paris Opera Ballet from 1983 t
     5.88s  user  발화 끝
    16.43s  agent 발화 끝
    16.51s  user  발화 시작: 잠깐만, 누레예프라고? 그 사람이 천구백칠십팔년에 파리 오페라…
    21.84s  user  발화 끝
    22.96s  user  발화 시작: …발레단 단원에게 '에투왈' 칭호를 준 사람 맞나?
    26.26s  <ret> 발화 (turn4 첫 프레임)
    26.34s  agent 발화 시작: <ret> 네, 천구백칠십팔년에 파리 오페라 발레단 단원에게 '에투왈' 칭호를 준 사람이 누레예프입니다. 그
    26.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.97s]: Nureyev bestowed the title of étoile to a member of the Paris Opera Ba
    26.47s  user  발화 끝
    36.11s  user  발화 시작: 에투왈이 뭔데?
    36.31s  agent 발화 끝
    37.31s  user  발화 끝
    37.35s  agent 발화 시작: 에투왈은 파리 오페라 발레에서 최고 등급의 무용수에게 주는 칭호예요. 정말 특별한 존재라는 뜻이죠.
    40.71s  user  발화 시작: 응.
    41.06s  user  발화 끝
    44.27s  user  발화 시작: 음… 그가 러시아 출신이라고 들었는데, 사실이야?
    44.35s  agent 발화 끝
    47.85s  <ret> 발화 (turn9 첫 프레임)
    47.92s  agent 발화 시작: <ret> 네, 루돌프 누레예프는 천구백삼십팔년 삼월 십칠일, 러시아에서 태어났습니다. 고향이 우파라고 하네
    47.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.74s]: Rudolf Khametovich Nureyev was born in Ufa, Russian SFSR, Soviet Union
    48.20s  user  발화 끝
    55.66s  agent 발화 끝
    56.53s  user  발화 시작: 러시아에서 태어났으면, 왜 프랑스 발레단을 이끌었지?
    60.22s  user  발화 끝
