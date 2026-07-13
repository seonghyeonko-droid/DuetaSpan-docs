# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_06",
#     "name": "준재",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-13",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-03-02",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-02-15",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-09-08",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     },
#     {
#       "date": "2025-07-13",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-26",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 여기 위도 삼십사 점 영 오, 경도 백육 점 오 오인 곳이 어 | S2 … 새디스 레스토랑은 어떤 종류의 음식을 파나요? | S3 아, 레드 칠리. 이번 주 토요일에… | S4 …새디스 레스토랑 예약해 줄 수 있어?

     0.00s  user  발화 시작: 여기 위도 삼십사 점 영 오, 경도 백육 점 오 오인 곳이 어디예요?
     6.43s  <ret> 발화 (turn1 첫 프레임)
     6.60s  agent 발화 시작: <ret> 위도 삼십사 점 영 오, 경도 백육 점 오 오은 미국 뉴멕시코주 앨버커키입니다. 앨버커키는 사막 
     6.60s  user  발화 끝
     7.66s  ⚡SPAN 주입 [d'=1.23s / d_lead=9.14s]: (tool result) The location with latitude 34.0522 and longitude 106.551
    15.75s  user  발화 시작: 그래.
    15.75s  agent 발화 끝
    16.25s  user  발화 시작: 앨버커키에 맛있는 식당 좀 찾아줘.
    16.25s  user  발화 끝
    18.66s  <ret> 발화 (turn4 첫 프레임)
    18.79s  agent 발화 시작: <ret> 앨버커키에는 프론티어 레스토랑, 엘 핀토 레스토랑 & 칸티나, 새디스 오브 뉴멕시코 같은 맛집이 
    18.79s  user  발화 끝
    19.13s  ⚡SPAN 주입 [d'=0.47s / d_lead=8.63s]: (tool result) There are many restaurants in Albuquerque, New Mexico, i
    27.43s  user  발화 시작: … 새디스 레스토랑은 어떤 종류의 음식을 파나요?
    27.43s  agent 발화 끝
    30.98s  agent 발화 시작: 새디스 오브 뉴멕시코는 뉴멕시코 스타일의 멕시코 요리를 전문으로 합니다. 특히 그들의 레드 칠리 소스는 아주
    30.98s  user  발화 끝
    39.11s  user  발화 시작: 어.
    39.11s  agent 발화 끝
    39.62s  user  발화 시작: 아, 레드 칠리. 이번 주 토요일에…
    39.62s  user  발화 끝
    42.67s  user  발화 시작: …새디스 레스토랑 예약해 줄 수 있어?
    42.67s  user  발화 끝
    45.71s  agent 발화 시작: 네.
    45.71s  user  발화 끝
    46.18s  <ret> 발화 (turn11 첫 프레임)
    46.22s  agent 발화 시작: <ret> 새디스 오브 뉴멕시코에 이천이십육년 칠월 십일일 저녁 일곱시에 예약이 완료되었습니다. 확인 번호는
    46.22s  agent 발화 끝
    46.49s  ⚡SPAN 주입 [d'=0.30s / d_lead=10.67s]: (tool result) Reservation confirmed for Sadie's of New Mexico on July 
    56.89s  agent 발화 끝
