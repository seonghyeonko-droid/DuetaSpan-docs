# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 마침 궁금했는데요, 마이클 잭슨의 “Beat It” 기타 솔로를 실제로 연주한 사람은 누구였나요? 뭔가 좀…
     7.71s  <ret> 발화 (turn1 첫 프레임)
     7.97s  user  발화 끝
     8.11s  agent 발화 시작: <ret> 네, 그 유명한 곡에 대한 아주 날카로운 관찰이세요. 에디 반 헤일런이 실제로 마이클 잭슨의 “B
     9.39s  ⚡SPAN 주입 [d'=1.68s / d_lead=4.39s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
    13.10s  user  발화 시작: 예.
    13.69s  user  발화 끝
    19.29s  user  발화 시작: 와, 진짜요? 반 헤일런이요? 잭슨의 평소 밴드와 더 가까운 사람이 연주했을 거라고 생각했어요.
    19.33s  agent 발화 끝
    25.28s  agent 발화 시작: 잭슨의 정규 뮤지션 중 한 명일 거라고 생각하는 분들이 많아요, 네. 당시 음악계에서는 꽤 놀라운 일이었죠.
    25.53s  user  발화 끝
    27.52s  user  발화 시작: 네.
    28.02s  user  발화 끝
    32.34s  user  발화 시작: 저기, 닭고기를 냉동고에서 꺼냈었는지 기억하세요?
    32.55s  agent 발화 끝
    35.92s  user  발화 시작: 죄송해요. “Beat It”으로 다시 돌아가서, 처음에는 하기 싫어했나요?
    36.04s  user  발화 끝
    40.19s  <ret> 발화 (turn8 첫 프레임)
    40.42s  agent 발화 시작: <ret> 그의 처음 망설임에 대한 이야기는 정말 흥미롭습니다. 처음에는 에디 반 헤일런이 계약 문제 때문에
    40.70s  user  발화 끝
    42.11s  ⚡SPAN 주입 [d'=1.92s / d_lead=4.36s]: Eddie Van Halen initially refused to play on “Beat It” due to a contra
    46.52s  user  발화 시작: 예.
    47.15s  user  발화 끝
    51.08s  agent 발화 끝
    51.46s  user  발화 시작: 계약 문제요? 정말 놀랍네요. 그래서 마음이 바뀌게 된 건 뭐였나요?
    56.03s  <ret> 발화 (turn11 첫 프레임)
    56.27s  agent 발화 시작: <ret> 도전, 그리고 상당한 규모의 도전이 그를 설득한 것 같아요. 마이클 잭슨이 직접 에디 반 헤일런을
    56.46s  user  발화 끝
    58.03s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.10s]: Michael Jackson personally visited Van Halen and convinced him to part
    65.96s  agent 발화 끝
