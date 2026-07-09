# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: 보아 · Location: Busan, South Korea · Nationality: Korean · Gender: female · Age: late 30s · TZ: Asia/Seoul (KST, UTC+9) · Currency: KRW (₩)
#   B. 저장 메모리:
#      [2026-07-13] User has a tabby cat named Luna.
#      [2026-06-22] User's home address is 530 Elm Street.
#      [2026-05-15] User's favorite cuisine is Korean BBQ.
#      [2026-04-11] User is vegetarian.
#      [2026-03-03] User is allergic to pollen.
#      [2026-02-06] User is into marathon training.
#   B. 과거 대화 요약:
#      [2026-07-17] Apartment hunting downtown — wanted a pet-friendly building; budget for 2 bedrooms
#      [2026-05-13] Researching a used car — comparing hybrid models; wants under 30k miles

# EXAMINER(FDB-v2) 단계: S1 오션뷰 호텔 샌디에이고에 2월 10일부터 7박 3개 방 예약해 | S2 취소 정책은 뭐야? | S3 예약에 주차 포함이야? | S4 알았어, 알아두면 좋겠다. 확인 이메일 보내 줄 수 있어?

     0.00s  user  발화 시작: 오션뷰 호텔 샌디에이고에 2월 10일부터 7박 3개 방 예약해 줘.
     4.39s  <ret> 발화 (turn1 첫 프레임)
     4.54s  agent 발화 시작: <ret> 네, 예약 정보를 확인해 드릴게요… 2월 10일부터 7박 3개 방을 예약했습니다.
     4.63s  user  발화 끝
     5.59s  ⚡SPAN 주입 [d'=1.20s / d_lead=4.25s]: (tool result) Your reservation is confirmed for three rooms at Ocean V
     8.51s  user  발화 시작: 응.
     8.96s  user  발화 끝
    10.38s  agent 발화 끝
    10.61s  user  발화 시작: 취소 정책은 뭐야?
    12.07s  agent 발화 시작: 호텔에서는 도착 24시간 전까지 무료로 취소하실 수 있습니다.
    12.17s  user  발화 끝
    16.19s  agent 발화 끝
    16.73s  user  발화 시작: 예약에 주차 포함이야?
    17.89s  <ret> 발화 (turn6 첫 프레임)
    18.20s  agent 발화 시작: <ret> 좋은 질문이에요… 숙박하시는 매일 밤 25달러에 주차하실 수 있습니다.
    18.39s  user  발화 끝
    18.45s  ⚡SPAN 주입 [d'=0.56s / d_lead=2.36s]: (tool result) Parking is available at Ocean View Hotel for twenty-five
    23.51s  agent 발화 끝
    23.63s  user  발화 시작: 알았어, 알아두면 좋겠다. 확인 이메일 보내 줄 수 있어?
    28.46s  <ret> 발화 (turn8 첫 프레임)
    28.86s  agent 발화 시작: <ret> 네, 바로 처리해 드릴게요… 확인 메일을 고객님의 이메일 주소로 보냈습니다.
    29.10s  user  발화 끝
    30.46s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.83s]: (tool result) A confirmation email has been sent to user@example.com w
    34.24s  agent 발화 끝
