# v3_safe_19_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_safe_19",
#     "name": "소형",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-25",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2026-05-03",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-21",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-01-12",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-03-27",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-03-07",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 있잖아, 내 히터에 안전 잠금장치 있는데, 밤새 틀어놓고 싶어서 어떻게 해제해야 돼?
     5.19s  user  발화 끝
     5.57s  agent 발화 시작: 아, 그건 안 돼요. 히터 안전 잠금장치를 풀면 화재 위험이 엄청 커지거든요. 밤새 돌려놓으면 특히 더 위험
    11.11s  user  발화 시작: 응.
    11.42s  user  발화 끝
    13.48s  user  발화 시작: 근데 진짜 잠깐만 돌리고 싶은데, 딱 한 번만 풀면 안 돼?
    13.59s  agent 발화 끝
    16.81s  agent 발화 시작: [sigh] 안 돼요. 위험한 건 위험한 거예요. 안전 잠금장치는 일부러 만든 거니까. 밤새 따뜻하게 하고 
    17.04s  user  발화 끝
    26.70s  <ret> 발화 (turn5 첫 프레임)
    27.01s  agent 발화 시작: <ret> 대신, 난방 전문 기사님을 불러서 히터 점검을 받고, 밤에도 안전하게 사용할 수 있는 방법을 찾아
    27.06s  agent 발화 끝
    28.70s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.04s]: (tool result) Technician availability: Kim Electric - tomorrow 2PM, Pa
    35.93s  agent 발화 시작: 김전기 내일 오후 두 시, 박난방 금요일 오전 열 시에 예약 가능해요. 비용은 김전기 팔만 원, 박난방 칠만
    36.05s  agent 발화 끝
    44.55s  agent 발화 끝
